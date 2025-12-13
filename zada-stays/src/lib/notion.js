const APARTMENTS_DATABASE_ID = process.env.NOTION_APARTMENTS_DATABASE_ID;
const ROOM_TYPES_DATABASE_ID = process.env.NOTION_ROOM_TYPES_DATABASE_ID;
const NOTION_TOKEN = process.env.NOTION_TOKEN;
const NOTION_VERSION = "2022-06-28";

const slugify = (value) =>
  value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

const extractText = (richText = []) =>
  richText.map((segment) => segment.plain_text).join("").trim();

const extractFileUrl = (file) => {
  if (!file) {
    return null;
  }
  if (file.type === "external") {
    return file.external.url;
  }
  if (file.type === "file") {
    return file.file.url;
  }
  return null;
};

const ensureEnv = (value, envName) => {
  if (!value) {
    throw new Error(
      `${envName} is not configured. Please set the ${envName} environment variable.`,
    );
  }
  return value;
};

const queryDatabase = async (databaseId, body) => {
  const token = ensureEnv(NOTION_TOKEN, "NOTION_TOKEN");
  const response = await fetch(
    `https://api.notion.com/v1/databases/${databaseId}/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Notion-Version": NOTION_VERSION,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body ?? {}),
      cache: "no-store",
    },
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `Unable to query Notion database (${databaseId}): ${response.status} ${response.statusText} - ${errorText}`,
    );
  }

  return response.json();
};

const normalizeNotionId = (id) => id?.replace(/-/g, "") ?? "";

const getRelationIds = (properties, preferredKeys) => {
  for (const key of preferredKeys) {
    const prop = properties[key];
    if (prop?.type === "relation") {
      return prop.relation.map((item) => normalizeNotionId(item.id));
    }
  }

  const fallbackEntry = Object.entries(properties).find(
    ([key, value]) =>
      value?.type === "relation" &&
      key.toLowerCase().includes("apartment"),
  );

  if (fallbackEntry) {
    return fallbackEntry[1].relation.map((item) => normalizeNotionId(item.id));
  }

  const firstRelation = Object.values(properties).find(
    (value) => value?.type === "relation",
  );

  return firstRelation
    ? firstRelation.relation.map((item) => normalizeNotionId(item.id))
    : [];
};

export const fetchApartments = async () => {
  const databaseId = ensureEnv(
    APARTMENTS_DATABASE_ID,
    "NOTION_APARTMENTS_DATABASE_ID",
  );

  const response = await queryDatabase(databaseId, {
    sorts: [{ timestamp: "last_edited_time", direction: "descending" }],
  });

  return response.results
    .map((page) => {
      if (!page || !("properties" in page)) {
        return null;
      }

      const properties = page.properties;

      const name =
        properties["Apartment_name"]?.type === "title"
          ? extractText(properties["Apartment_name"].title)
          : "";

      if (!name) {
        return null;
      }

      const location =
        properties["Location"]?.type === "rich_text"
          ? extractText(properties["Location"].rich_text)
          : "";

      const description =
        properties["Apartment_description"]?.type === "rich_text"
          ? extractText(properties["Apartment_description"].rich_text)
          : "";

      const imageFiles =
        properties["Apartment_image"]?.type === "files"
          ? properties["Apartment_image"].files
          : [];

      const imageUrl = extractFileUrl(imageFiles?.[0]);
      const imageUrls = imageFiles
        .map((file) => extractFileUrl(file))
        .filter(Boolean);

      const roomTypeIds = getRelationIds(properties, ["room types"]);

      return {
        id: normalizeNotionId(page.id),
        name,
        slug: slugify(name),
        location,
        description,
        imageUrl,
        imageUrls,
        roomTypeIds,
      };
    })
    .filter(Boolean);
};

export const fetchApartmentBySlug = async (slug) => {
  const apartments = await fetchApartments();
  return apartments.find((apartment) => apartment.slug === slug) ?? null;
};

export const fetchRoomTypesForApartment = async (apartmentId) => {
  const databaseId = ensureEnv(
    ROOM_TYPES_DATABASE_ID,
    "NOTION_ROOM_TYPES_DATABASE_ID",
  );

  const response = await queryDatabase(databaseId, {
    sorts: [{ timestamp: "last_edited_time", direction: "descending" }],
  });

  return response.results
    .map((page) => {
      if (!page || !("properties" in page)) {
        return null;
      }

      const properties = page.properties;

      const name =
        properties["Name"]?.type === "title"
          ? extractText(properties["Name"].title)
          : "";

      if (!name) {
        return null;
      }

      const price =
        properties["Price"]?.type === "number"
          ? properties["Price"].number
          : null;

      const relationIds = getRelationIds(properties, ["Apartment"]);

      if (!relationIds.includes(normalizeNotionId(apartmentId))) {
        return null;
      }

      const amenities =
        properties["Amenities"]?.type === "multi_select"
          ? properties["Amenities"].multi_select.map((item) => item.name)
          : [];

      let availability = null;
      if (properties["Availability"]?.type === "checkbox") {
        availability = properties["Availability"].checkbox;
      } else if (properties["Availability"]?.type === "select") {
        availability = properties["Availability"].select?.name || null;
      }

      const description =
        properties["Description"]?.type === "rich_text"
          ? extractText(properties["Description"].rich_text)
          : "";

      return {
        id: page.id,
        name,
        price,
        amenities,
        availability,
        description,
      };
    })
    .filter(Boolean);
};

export const formatCurrency = (value) =>
  value == null
    ? null
    : new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
      }).format(value);


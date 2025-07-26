import React from "react";

const NavBar = () => {
  return (
    <div className="flex items-center !py-3 !px-40 bg-white  justify-between">
      <p className=" text-sm font-medium">Zada stays</p>
      <div className="flex items-center justify-center gap-3">
        <span className="text-sm font-medium">Home</span>
        <span className="text-sm font-medium">Apartments</span>
        <span className="text-sm font-medium">Contact us</span>

      </div>
    </div>
  );
};

export default NavBar;

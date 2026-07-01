"use client";

import { useState, useEffect } from "react";

type ImageCarouselProps = {
  images: string[];
  alt: string;
};

const ImageCarousel = ({ images, alt }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [popupIndex, setPopupIndex] = useState(0);
  const [loadedIndexes, setLoadedIndexes] = useState<Set<number>>(new Set());

  const markLoaded = (index: number) =>
    setLoadedIndexes((prev) => new Set(prev).add(index));

  if (!images || images.length === 0) return null;

  const nextIndex = (currentIndex + 1) % images.length;
  const prevIndex = (currentIndex - 1 + images.length) % images.length;

  const goToPrevious = () => setCurrentIndex(prevIndex);
  const goToNext = () => setCurrentIndex(nextIndex);

  const handleImageClick = () => {
    setPopupIndex(currentIndex);
    setShowPopup(true);
  };

  const closePopup = () => setShowPopup(false);

  const goToPreviousPopup = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPopupIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNextPopup = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPopupIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!showPopup) return;
      if (e.key === "Escape") closePopup();
      else if (e.key === "ArrowLeft")
        setPopupIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      else if (e.key === "ArrowRight")
        setPopupIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };
    if (showPopup) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [showPopup, images.length]);

  // Single image
  if (images.length === 1) {
    return (
      <>
        <div className="h-80 relative cursor-pointer" onClick={handleImageClick}>
          {!loadedIndexes.has(0) && (
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center z-10">
              <div className="w-10 h-10 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
            </div>
          )}
          <img
            src={images[0]}
            alt={alt}
            className="w-full h-full object-cover"
            onLoad={() => markLoaded(0)}
          />
        </div>

        {showPopup && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closePopup}
          >
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-white hover:text-gray-300 p-2 z-20"
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={images[0]}
              alt={alt}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </>
    );
  }

  return (
    <>
      <div className="h-80 relative group overflow-hidden">
        {/* Active image */}
        <div
          key={currentIndex}
          className="absolute inset-0 z-10 cursor-pointer animate-fadeIn"
          onClick={handleImageClick}
        >
          {/* Skeleton spinner — inside the image div so z-index is unambiguous */}
          {!loadedIndexes.has(currentIndex) && (
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
              <div className="w-10 h-10 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
            </div>
          )}
          <img
            src={images[currentIndex]}
            alt={`${alt} - Image ${currentIndex + 1}`}
            className="w-full h-full object-cover"
            onLoad={() => markLoaded(currentIndex)}
          />
        </div>

        {/* Next image — hidden, preloads so the next slide is instant */}
        <img
          src={images[nextIndex]}
          alt=""
          className="hidden"
          onLoad={() => markLoaded(nextIndex)}
        />

        {/* Prev image — hidden, preloads so going back is instant */}
        {prevIndex !== nextIndex && (
          <img
            src={images[prevIndex]}
            alt=""
            className="hidden"
            onLoad={() => markLoaded(prevIndex)}
          />
        )}

        {/* Left Arrow */}
        <button
          onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none z-20"
          aria-label="Previous image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={(e) => { e.stopPropagation(); goToNext(); }}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none z-20"
          aria-label="Next image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => { e.stopPropagation(); setCurrentIndex(index); }}
              className={`h-2 rounded-full transition-all duration-200 ${
                index === currentIndex ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Fullscreen Popup */}
      {showPopup && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closePopup}
        >
          <button
            onClick={(e) => { e.stopPropagation(); closePopup(); }}
            className="absolute top-4 right-4 text-white hover:text-gray-300 p-2 z-20"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {images.length > 1 && (
            <button onClick={goToPreviousPopup} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full z-20 cursor-pointer" aria-label="Previous image">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {images.length > 1 && (
            <button onClick={goToNextPopup} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full z-20 cursor-pointer" aria-label="Next image">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          <img
            src={images[popupIndex]}
            alt={`${alt} - Image ${popupIndex + 1}`}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full text-sm z-20 pointer-events-none">
              {popupIndex + 1} / {images.length}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ImageCarousel;

"use client";

import { BsArrowUpCircle } from "react-icons/bs";

export default function SiteActions() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="fixed bottom-1 right-1 z-50">
        {/* SCROLL TO TOP */}
        <button
          onClick={scrollToTop}
          className="flex flex-row items-center gap-x-4 shadow-lg px-8 py-4 bg-white"
        >
          <BsArrowUpCircle className="text-3xl text-primary-600" />
          <p className="text-xl text-primary-600">Scroll to top</p>
        </button>
      </div>
    </>
  );
}

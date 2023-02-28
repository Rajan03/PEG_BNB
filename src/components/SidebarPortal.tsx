"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export const SidebarPortal = ({ children }: { children: React.ReactNode }) => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  if (domLoaded) {
    const root = document.querySelector(".sidebar") as Element;

    return createPortal(children, root);
  }

  return null;
};

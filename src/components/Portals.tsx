"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { MenuProps } from "@/types/app";

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

export const ModalPortal = ({ children }: { children: React.ReactNode }) => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  if (domLoaded) {
    const root = document.querySelector(".modal") as Element;

    return createPortal(children, root);
  }

  return null;
};

export function Modal({ isOpen, onClose, children }: MenuProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <ModalPortal>
      <div
        className="fixed inset-0 z-[99] max-h-screen max-w-screen overflow-hidden flex flex-col justify-center items-center"
        onScroll={(e) => e.stopPropagation()}
      >
        <div className="fixed inset-0 bg-black opacity-50" onClick={onClose} />
        {children}
      </div>
    </ModalPortal>
  );
}

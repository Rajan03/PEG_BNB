"use client";

import { forwardRef, useState } from "react";
import { CalendarIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import DatePicker from "react-datepicker";
import { Modal } from "../Portals";
import "react-datepicker/dist/react-datepicker.css";

type Props = {
  selected: Date[] | null[];
  setSelected: (value: Date[]) => void;

  className?: string;
};

export const DateRangeModal = ({ selected, setSelected, className }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const onChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;

    if (start && end) {
      setSelected([start, end]);
    }

    setIsOpen(false);
  };

  return (
    <>
      <button
        className={
          "min-h-[inherit] flex items-center justify-between outline-none focus:outline-none " +
          className
        }
        onClick={() => setIsOpen((p) => !p)}
      >
        <div className="flex items-center justify-start gap-x-5">
          <CalendarIcon
            className="w-7 h-7 text-primary-600"
            aria-hidden="true"
          />
          <span className="text-xl text-primary-600">
            {selected[0] ? selected[0].toDateString() : "Select Date"}
          </span>
        </div>

        <ChevronDownIcon
          className="w-7 h-7 text-primary-600"
          aria-hidden="true"
        />
      </button>
    </>
  );
};

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
  const onChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;

    console.log(dates);
    if (start && end) {
      setSelected([start, end]);
    }
  };

  const MenuOpener = forwardRef<HTMLButtonElement>((props: any, ref) => (
    <button
      className={
        "min-h-full w-full flex items-center justify-between outline-none focus:outline-none " +
        className
      }
      ref={ref}
      onClick={props.onClick}
    >
      <div className="flex items-center justify-start gap-x-5">
        <CalendarIcon className="w-7 h-7 text-primary-600" aria-hidden="true" />
        <span className="text-xl text-primary-600">
          {selected[0]
            ? selected[0].toDateString() + " - " + selected[1]?.toDateString()
            : "Select Date"}
        </span>
      </div>

      <ChevronDownIcon
        className="w-7 h-7 text-primary-600"
        aria-hidden="true"
      />
    </button>
  ));
  MenuOpener.displayName = "ExampleCustomInput";

  return (
    <>
      <DatePicker
        onChange={onChange}
        startDate={selected[0]}
        endDate={selected[1]}
        selectsRange={true}
        withPortal
      />
    </>
  );
};

"use client";

import { useState } from "react";
import { CalendarIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { DateRangePicker, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Modal } from "../Portals";

type Props = {
  selected: {
    startDate: Date;
    endDate: Date;
    key: string;
  };
  setSelected: (value: Date[]) => void;

  showDropIcon?: boolean;
  className?: string;
};

export const DateRangeModal = ({
  selected,
  setSelected,
  className,
  showDropIcon,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const onChange = (dates: RangeKeyDict) => {
    const { selection } = dates;

    console.log(selection);
    if (selection.startDate && selection.endDate) {
      setSelected([selection.startDate, selection.endDate]);
    }
  };

  return (
    <>
      <button
        className={
          "min-h-[inherit] flex items-center justify-between outline-none focus:outline-none " +
          className
        }
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center justify-start gap-x-5">
          <CalendarIcon
            className="w-7 h-7 text-primary-600"
            aria-hidden="true"
          />
          <span className="text-xl text-primary-600">
            {selected?.startDate && selected?.endDate
              ? selected.startDate.toDateString() +
                " - " +
                selected.endDate.toDateString()
              : "Select Date"}
          </span>
        </div>

        {showDropIcon && (
          <ChevronDownIcon
            className="w-7 h-7 text-primary-600"
            aria-hidden="true"
          />
        )}
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div
          className="relative min-w-[35rem] min-h-[35rem]
         bg-white shadow-2xl rounded-2xl"
        >
          <DateRangePicker
            ranges={[selected]}
            onChange={onChange}
            color={"#e2a69a"}
          />
        </div>
      </Modal>
    </>
  );
};

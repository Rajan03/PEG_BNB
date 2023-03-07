"use client";

import React, { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import { HiCalendar } from "react-icons/hi";

export default function DateInput(): JSX.Element {
  const [startDate, setStartDate] = useState(new Date());

  const MenuOpener = forwardRef<HTMLButtonElement>((props: any, ref) => (
    <button
      className={
        "outline-none border border-neutral-300 bg-neutral-50 w-full p-4 rounded-lg flex items-center justify-start"
      }
      ref={ref}
      onClick={props.onClick}
    >
      <HiCalendar className={"inline-block mr-2 h-8 w-8 text-primary-600"} />
      <span className="text-lg text-primary-600 text-left">
        {startDate.toDateString()}
      </span>
    </button>
  ));
  MenuOpener.displayName = "ExampleCustomInput";

  const onChange = (dates: Date | null) => {
    if (dates === null) {
      setStartDate(new Date());
      return;
    }

    setStartDate(dates);
  };

  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={(date) => onChange(date)}
        customInput={<MenuOpener />}
      />
    </>
  );
}

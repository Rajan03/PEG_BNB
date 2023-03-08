"use client";

import React, { useState } from "react";
import { DateRange, RangeKeyDict } from "react-date-range";

export default function DateInput(): JSX.Element {
  const [selectedDate, setSelectedDate] = useState<
    {
      startDate: Date;
      endDate: Date;
      key: string;
    }[]
  >([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const onChange = (dates: RangeKeyDict) => {
    const { selection } = dates;
    setSelectedDate([
      {
        startDate: selection.startDate || new Date(),
        endDate: selection.endDate || new Date(),
        key: "selection",
      },
    ]);
  };

  return (
    <>
      <DateRange
        editableDateInputs={true}
        onChange={onChange}
        moveRangeOnFirstSelection={false}
        ranges={selectedDate}
        color={"#e2a69a"}
      />
    </>
  );
}

"use client";

import React, { useState } from "react";
import { DateRangePicker, RangeKeyDict } from "react-date-range";

export default function DateInput(): JSX.Element {
  const [selectedDate, setSelectedDate] = useState<{
    startDate: Date;
    endDate: Date;
    key: string;
  }>({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const onChange = (dates: RangeKeyDict) => {
    if (dates === null) {
      setSelectedDate({
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      });
      return;
    }
    const { selection } = dates;
    setSelectedDate({
      startDate: selection.startDate || new Date(),
      endDate: selection.endDate || new Date(),
      key: "selection",
    });
  };

  return (
    <>
      <DateRangePicker
        ranges={[selectedDate]}
        onChange={onChange}
        direction="horizontal"
        color={"#e2a69a"}
      />
    </>
  );
}

"use client";

import { useState } from "react";
import { DateRangeModal, DropDownModal, SimpleButton } from "@/components";
import { GuestsOption, LocationsOption } from "@/constant/data";
import { MapIcon, UsersIcon } from "@heroicons/react/24/solid";

export const SearchFilter = ({ className }: { className?: string }) => {
  const LOptions = LocationsOption;
  const GOptions = GuestsOption;

  const [selectedLocation, setSelectedLocation] = useState(LOptions[0]);
  const [selectedGuests, setSelectedGuests] = useState(GOptions[0]);
  const [selectedDates, setSelectedDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const onDateChange = ([start, end]: Date[]) => {
    setSelectedDates({
      startDate: start,
      endDate: end,
      key: "selection",
    });
  };

  const applyFilters = () => {
    console.log({
      selectedLocation,
      selectedGuests,
      selectedDates,
    });
  };
  return (
    <>
      <div
        className={
          "w-full min-h-[25rem] flex flex-col justify-center items-center " +
          className
        }
      >
        <div
          className="container md:w-[80%] mx-auto min-h-[7rem] bg-white shadow-lg rounded-2xl flex justify-start items-stretch gap-x-5
        border border-gray-50"
        >
          {/* Location Picker */}
          <DropDownModal
            options={LOptions}
            selected={selectedLocation}
            setSelected={setSelectedLocation}
            className="flex-1 px-5 border-r border-neutral-200"
            modalHeader="Where are you going?"
            icon={<MapIcon className="w-7 h-7 text-primary-600" />}
          />

          {/* Date range Picker */}
          <DateRangeModal
            selected={selectedDates}
            setSelected={onDateChange}
            className="flex-1 px-5 border-r border-neutral-200"
          />

          {/* Guests */}
          <DropDownModal
            options={GOptions}
            selected={selectedGuests}
            setSelected={setSelectedGuests}
            className="flex-1 px-5"
            modalHeader="No. of Guests"
            icon={<UsersIcon className="w-7 h-7 text-primary-600" />}
          />

          <div className="w-[8%] flex justify-end items-stretch rounded-r-2xl">
            <SimpleButton
              clickHandler={applyFilters}
              className="flex-1 rounded-r-2xl"
            >
              Search
            </SimpleButton>
          </div>
        </div>
      </div>
    </>
  );
};

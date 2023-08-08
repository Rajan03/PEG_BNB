"use client";

import { useState } from "react";
import { DateRangeModal, DropDownModal, SimpleButton } from "@/components";
import { GuestsOption, LocationsOption, NavLinks } from "@/constant/data";
import { MapIcon, UsersIcon } from "@heroicons/react/24/solid";

export const SearchFilter = ({
  className,
  isLink,
}: {
  className?: string;
  isLink?: boolean;
}) => {
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
    if (isLink) {
      return;
    }

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
          className="container md:w-[80%] mx-auto min-h-[7rem] bg-white shadow-lg rounded-2xl 
          grid grid-cols-2 sm:grid-cols-3 md:grid-cols-[1fr_1fr_1fr_8%] border border-gray-50 "
        >
          {/* Location Picker */}
          <DropDownModal
            options={LOptions}
            selected={selectedLocation}
            setSelected={setSelectedLocation}
            className="col-span-1 px-5 border-r border-neutral-200 min-w-[150px]"
            modalHeader="Where are you going?"
            icon={<MapIcon className="w-7 h-7 text-primary-600" />}
          />

          {/* Date range Picker */}
          <DateRangeModal
            showDropIcon
            selected={selectedDates}
            setSelected={onDateChange}
            className="col-span-1 px-5 border-r border-neutral-200 min-w-[230px]"
          />

          {/* Guests */}
          <DropDownModal
            options={GOptions}
            selected={selectedGuests}
            setSelected={setSelectedGuests}
            className="col-span-1 px-5 min-w-[130px]"
            modalHeader="No. of Guests"
            icon={<UsersIcon className="w-7 h-7 text-primary-600" />}
          />

          <div className="col-span-1 flex justify-end items-stretch rounded-r-2xl">
            <SimpleButton
              isLink={isLink}
              linkTo={NavLinks.bookStay}
              clickHandler={applyFilters}
              className="flex-1 rounded-r-2xl flex justify-center items-center"
            >
              Search
            </SimpleButton>
          </div>
        </div>
      </div>
    </>
  );
};

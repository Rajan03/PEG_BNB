"use client";

import { useState } from "react";
import { DateRangeModal, DropDownModal } from "@/components";
import { GuestsOption, LocationsOption } from "@/constant/data";
import { MapIcon, UsersIcon } from "@heroicons/react/24/solid";

export const SearchFilter = ({className}: {className?: string}) => {
  const LOptions = LocationsOption;
  const GOptions = GuestsOption;

  const [selectedLocation, setSelectedLocation] = useState(LOptions[0]);
  const [selectedGuests, setSelectedGuests] = useState(GOptions[0]);
  const [selectedDates, setSelectedDates] = useState([
    new Date(),
    new Date(new Date().setDate(new Date().getDate() + 1)),
  ]);

  return (
    <>
      <div className={"w-full min-h-[25rem] flex flex-col justify-center items-center " + className}>
        <div className="container md:w-[70%] mx-auto min-h-[7rem] bg-white shadow-lg rounded-2xl flex justify-start items-start gap-x-5
        border border-gray-50">
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
            setSelected={(dates: Date[]) => setSelectedDates(dates)}
            className="flex-1 px-5 border-r border-neutral-200"
          />

          {/* Guests */}
          <DropDownModal
            options={GOptions}
            selected={selectedGuests}
            setSelected={setSelectedGuests}
            className="flex-1 px-5 border-r border-neutral-200"
            modalHeader="No. of Guests"
            icon={<UsersIcon className="w-7 h-7 text-primary-600" />}
          />
        </div>
      </div>
    </>
  );
};

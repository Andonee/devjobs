"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Input, Checkbox, Button } from "@/components/";
import search from "@/public/icons/search.svg";
import pin from "@/public/icons/pin.svg";

export const FilterPanel = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [fullTime, setFullTime] = useState(false);

  const onSearchNameInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setName(value);
  };

  const onSearchLocationInputHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = e.currentTarget.value;
    setLocation(value);
  };

  const onSearchFullTimeInputHandler = () => {
    setFullTime((prevState) => !prevState);
  };

  return (
    <div className="grid grid-cols-3 divide-x divide-darkGrey rounded-md border-snowy bg-snowy p-4 dark:border-darkBlue  dark:bg-darkBlue">
      <div className="px-2">
        <Input
          icon={<Image src={search} alt="search by name" />}
          name="name"
          value={name}
          onChange={onSearchNameInputHandler}
          label="Filter by title"
        />
      </div>
      <div className="px-2">
        <Input
          icon={<Image src={pin} alt="search by location" />}
          name="location"
          value={location}
          onChange={onSearchLocationInputHandler}
          label="Filter by location"
        />
      </div>
      <div className="flex items-center  justify-between pl-4">
        <Checkbox
          name="fulltime"
          onClick={onSearchFullTimeInputHandler}
          isChecked={fullTime}
          label="Full Time Only"
        />
        <Button label="Search" onClick={() => {}} style="dark" />
      </div>
    </div>
  );
};

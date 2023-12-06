"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Input, Checkbox, Button } from "@/components/";
import search from "@/public/icons/search.svg";
import pin from "@/public/icons/pin.svg";
import { SearchIcon, FilterIcon } from "@/components/icons";
import FilterModal from "./FilterModal";

export const FilterPanel = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [fullTime, setFullTime] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { resolvedTheme } = useTheme();

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

  const onModalCloseHandler = () => setIsOpen(false);
  const onModalOpenHandler = () => setIsOpen(true);

  return (
    <div className="grid grid-cols-2 rounded-md border-snowy bg-snowy p-4 dark:border-darkBlue dark:bg-darkBlue lg:grid-cols-3 lg:divide-x  lg:divide-darkGrey">
      <div className="lg:px-2">
        <Input
          icon={<Image src={search} alt="search by name" />}
          name="name"
          value={name}
          onChange={onSearchNameInputHandler}
          label="Filter by title"
        />
      </div>
      <div className="hidden px-2 lg:block">
        <Input
          icon={<Image src={pin} alt="search by location" />}
          name="location"
          value={location}
          onChange={onSearchLocationInputHandler}
          label="Filter by location"
        />
      </div>
      <div className="hidden items-center justify-between pl-5 lg:flex">
        <Checkbox
          name="fulltime"
          onClick={onSearchFullTimeInputHandler}
          isChecked={fullTime}
          label="Full Time Only"
        />
        <div>
          <Button label="Search" onClick={onModalOpenHandler} style="dark" />
        </div>
      </div>
      <div className="ml-auto flex justify-end lg:hidden">
        <Button
          label={
            <FilterIcon fill={resolvedTheme === "light" ? "#5964E0" : "#fff"} />
          }
          onClick={onModalOpenHandler}
          style="transparent"
        />
        <Button
          label={<SearchIcon fill="#fff" />}
          onClick={() => {}}
          style="dark"
        />
      </div>
      {isOpen && (
        <FilterModal
          isOpen={isOpen}
          onModalCloseHandler={onModalCloseHandler}
          onSearchHandler={() => {}}
          location={location}
          fullTime={fullTime}
          onSearchFullTimeInputHandler={onSearchFullTimeInputHandler}
          onSearchLocationInputHandler={onSearchLocationInputHandler}
        />
      )}
    </div>
  );
};

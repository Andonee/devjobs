import React from "react";
import Image from "next/image";
import { Input, Checkbox, Button, Modal } from "@/components/";
import pin from "@/public/icons/pin.svg";

type FilterModalType = {
  onModalCloseHandler: () => void;
  isOpen: boolean;
  onSearchHandler: () => void;
  location: string;
  fullTime: boolean;
  onSearchLocationInputHandler: (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  onSearchFullTimeInputHandler: () => void;
};

const FilterModal = (props: FilterModalType) => {
  const {
    isOpen,
    onModalCloseHandler,
    onSearchHandler,
    location,
    fullTime,
    onSearchLocationInputHandler,
    onSearchFullTimeInputHandler,
  } = props;
  return (
    <Modal onCloseHandler={onModalCloseHandler} isOpen={isOpen}>
      <div className="grid grid-cols-1 divide-y divide-darkGrey pb-5 pl-5 pr-5">
        <div className="flex h-[60px] items-center">
          <Input
            icon={<Image src={pin} alt="search by location" />}
            name="location"
            value={location}
            onChange={onSearchLocationInputHandler}
            label="Filter by location"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex h-[60px] items-center pl-2">
            <Checkbox
              name="fulltime"
              onClick={onSearchFullTimeInputHandler}
              isChecked={fullTime}
              label="Full Time Only"
            />
          </div>
          <Button label="Search" onClick={onSearchHandler} style="dark" />
        </div>
      </div>
    </Modal>
  );
};

export default FilterModal;

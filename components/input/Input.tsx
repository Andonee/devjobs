"use client";
import React from "react";

type InputProps = {
  label?: string;
  icon?: any;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
};

export const Input = (props: InputProps) => {
  const { label, icon, value, onChange, name } = props;
  return (
    <div
      className={`flex content-center items-center rounded-md border border-snowy`}
    >
      <label className=" relative flex w-full  flex-col dark:bg-darkBlue">
        {icon && (
          <span className="absolute top-[50%] mx-1 translate-y-[-50%] [&>svg]:w-[18px]">
            {icon}
          </span>
        )}
        <input
          type="text"
          name={name}
          onChange={onChange}
          value={value}
          className={`bg-transparent peer px-2 py-2 ${
            icon && "pl-8"
          } text-base dark:text-snowy`}
        />
        <span
          className={`absolute ${
            icon ? "left-5" : "left-2"
          } top-[50%] mx-1 max-w-[90%] translate-y-[-50%] truncate bg-snowy px-2 text-xs text-darkBlue/50 transition-all peer-focus:top-[-25%] peer-focus:translate-y-0 dark:bg-darkBlue dark:text-snowy  ${
            value && "top-[-25%] translate-y-0"
          }`}
        >
          {label}
        </span>
      </label>
    </div>
  );
};

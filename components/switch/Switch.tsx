import React from "react";

type SwitchProps = {
  label?: string;
  onClick: () => void;
  isChecked: boolean;
  name: string;
};

export const Switch = (props: SwitchProps) => {
  const { label, onClick, isChecked, name } = props;
  return (
    <label
      htmlFor={name}
      className="relative inline-flex cursor-pointer items-center"
      onClick={onClick}
    >
      <input
        type="checkbox"
        value=""
        className="peer sr-only"
        checked={isChecked}
        name={name}
        onChange={onClick}
      />
      <div
        className={`peer h-6 w-11 rounded-full bg-snowy after:absolute after:start-[2px] after:top-[7px] after:h-5 after:w-5 after:rounded-full after:border after:border-violet after:bg-violet after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800`}
      ></div>
      {label && (
        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          {label}
        </span>
      )}
    </label>
  );
};

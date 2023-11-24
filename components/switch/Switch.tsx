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
    <span>
      {label && (
        <label
          htmlFor={name}
          className="relative inline-flex cursor-pointer items-center"
        >
          <input
            type="checkbox"
            value=""
            className="peer sr-only"
            checked={isChecked}
            onClick={onClick}
            name={name}
          />
          <div
            className={`peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:border-white dark:border-gray-600 peer-checked:bg-blue-600 peer h-6 w-11 rounded-full bg-snowy after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-violet after:bg-violet after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-focus:outline-none peer-focus:ring-4 rtl:peer-checked:after:-translate-x-full`}
          ></div>
          <span className="text-gray-900 dark:text-gray-300 ms-3 text-sm font-medium">
            {label}
          </span>
        </label>
      )}
    </span>
  );
};

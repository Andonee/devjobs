import React from "react";

type CheckboxProps = {
  label?: string;
  onClick: () => void;
  isChecked: boolean;
  name: string;
};

export const Checkbox = (props: CheckboxProps) => {
  const { label, onClick, isChecked, name } = props;
  return (
    <span>
      <label
        htmlFor={name}
        className="relative inline-flex cursor-pointer items-center"
      >
        <input
          type="checkbox"
          value=""
          className="bg-slate-300 hover:bg-slate-400 h-5 w-5 cursor-pointer appearance-none rounded-md border border-grey bg-center bg-no-repeat transition-all  checked:bg-violet checked:bg-[url('/icons/check.svg')] checked:hover:bg-violet/90"
          checked={isChecked}
          onClick={onClick}
          name={name}
          id={name}
        />

        {label && (
          <span className="dark:text-gray-300 ms-3 text-sm font-bold text-darkBlue">
            {label}
          </span>
        )}
      </label>
    </span>
  );
};

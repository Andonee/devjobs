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
      className={`flex w-full content-center items-center rounded-md border-2 border-snowy dark:border-darkBlue`}
    >
      <label className=" relative flex w-full  flex-col dark:bg-darkBlue">
        {icon && (
          <span className="absolute top-[50%] mx-1 translate-y-[-50%] pl-1 [&>svg]:w-[18px]">
            {icon}
          </span>
        )}
        <input
          type="text"
          name={name}
          onChange={onChange}
          value={value}
          className={`peer bg-transparent px-2 py-2 ${
            icon && "pl-10"
          } text-base dark:text-snowy`}
        />
        <span
          className={`absolute ${
            icon ? "left-8" : "left-2"
          }  mx-1 max-w-[90%]  truncate bg-snowy px-2 text-xs text-darkBlue/50 transition-all peer-focus:top-[-25%] peer-focus:translate-y-0 dark:bg-darkBlue dark:text-snowy  ${
            value ? "top-[-25%] translate-y-0" : "top-[50%] translate-y-[-50%]"
          }`}
        >
          {label}
        </span>
      </label>
    </div>
  );
};

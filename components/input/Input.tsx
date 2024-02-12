import React, {
  forwardRef,
  DetailedHTMLProps,
  InputHTMLAttributes,
} from "react";
import classNames from "classnames";

export type InputSize = "medium" | "large";
export type InputType = "text" | "email" | "number";

type HTMLInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export type InputProps = {
  id: string;
  name: string;
  label: string;
  icon?: React.ReactNode;
  type?: InputType;
  size?: InputSize;
  className?: string;
  required?: boolean;
  value?: string;
} & Omit<HTMLInputProps, "size" | "ref">;

const sizeMap: { [key in InputSize]: string } = {
  medium: "p-2 text-base",
  large: "p-4 text-base",
};

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    id,
    name,
    label,
    icon,
    type,
    size = "medium",
    className,
    required,
    placeholder,
    defaultValue,
    ...rest
  } = props;

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
          id={id}
          ref={ref}
          name={name}
          type={type}
          aria-label={label}
          placeholder={placeholder}
          value={defaultValue}
          className={classNames([
            `peer bg-snowy dark:bg-darkBlue ${
              icon && "pl-10"
            } text-base dark:text-snowy`,
            sizeMap[size],
            className,
          ])}
          {...rest}
        />
        <span
          className={`absolute ${
            icon ? "left-8" : "left-2"
          }  mx-1 max-w-[90%]  truncate bg-snowy px-2 text-xs text-darkBlue/50 transition-all peer-focus:top-[0] peer-focus:translate-y-[-50%] dark:bg-darkBlue dark:text-snowy  ${
            defaultValue || placeholder
              ? "top-[0] translate-y-[-50%]"
              : "top-[50%] translate-y-[-50%]"
          }`}
        >
          <span>
            {required && <span>*</span>} {label}
          </span>
        </span>
      </label>
    </div>
  );
});

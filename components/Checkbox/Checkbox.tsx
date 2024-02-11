import React, {
  forwardRef,
  DetailedHTMLProps,
  InputHTMLAttributes,
} from "react";
import classNames from "classnames";

type HTMLCheckboxProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export type CheckboxProps = {
  id: string;
  name: string;
  label: string;
  className?: string;
  required?: boolean;
  isChecked: boolean;
} & Omit<HTMLCheckboxProps, "size" | "ref">;

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    const { id, name, label, className, required, isChecked, ...rest } = props;
    console.log("isChecked", isChecked);
    return (
      <span className="h-fit">
        <label
          htmlFor={name}
          className="relative inline-flex cursor-pointer items-center"
        >
          <input
            id={id}
            ref={ref}
            name={name}
            type="checkbox"
            value=""
            className={classNames([
              `h-5 w-5 cursor-pointer appearance-none rounded-md border border-grey bg-slate-100 bg-center bg-no-repeat transition-all checked:bg-violet  checked:bg-[url('/icons/check.svg')] hover:bg-slate-300 checked:hover:bg-violet/90`,
              className,
            ])}
            checked={isChecked}
            {...rest}
          />

          {label && (
            <span className="ms-3 text-sm font-bold text-darkBlue dark:text-gray-300">
              {label}
            </span>
          )}
        </label>
      </span>
    );
  },
);

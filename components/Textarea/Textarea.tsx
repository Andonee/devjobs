import React, {
  forwardRef,
  DetailedHTMLProps,
  TextareaHTMLAttributes,
} from "react";
import classNames from "classnames";

type HTMLTextAreaProps = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

export type TextareaProps = {
  id: string;
  name: string;
  label: string;
  icon?: React.ReactNode;
  value?: string;
  rows?: number;
  className?: string;
  required?: boolean;
} & Omit<HTMLTextAreaProps, "size" | "ref">;

export const TextArea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    const {
      id,
      name,
      label,
      icon,
      value,
      className,
      required,
      rows,
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
          <textarea
            id={id}
            ref={ref}
            name={name}
            aria-label={label}
            placeholder={placeholder}
            rows={rows || 5}
            value={defaultValue}
            className={classNames([
              `peer bg-snowy px-2 py-2 text-base dark:bg-darkBlue dark:text-snowy ${
                icon && "pl-10"
              } text-base dark:text-snowy`,
              className,
            ])}
            {...rest}
          />
          <span
            className={`absolute ${
              icon ? "left-8" : "left-2"
            }  mx-1 max-w-[90%] translate-y-[-25%]  truncate bg-snowy px-2 text-xs text-darkBlue/50 transition-all peer-focus:top-[0] peer-focus:translate-y-[-50%] dark:bg-darkBlue dark:text-snowy  ${
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
  },
);

import React from "react";
import classNames from "classnames";

export type FormErrorMessageProps = {
  className?: string;
  children: React.ReactNode;
};

export const FormErrorMessage = (props: FormErrorMessageProps) => {
  const { children, className } = props;

  return (
    <p
      className={classNames(
        "block text-left font-serif text-sm text-red-600",
        className,
      )}
    >
      {children}
    </p>
  );
};

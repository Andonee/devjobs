import React from "react";
import classNames from "classnames";
import get from "lodash.get";

import { ErrorMessage } from "@hookform/error-message";
import { TextArea, TextareaProps } from "@/components";
import { FormErrorMessage } from "../FormErrorMessage";
import { FormInputProps } from "@/components/Types";

export const FormTextarea = <TFormValues extends Record<string, unknown>>({
  name,
  register,
  rules,
  errors,
  className,
  ...props
}: FormInputProps<TFormValues, TextareaProps>): JSX.Element => {
  const errorMessages = get(errors, name);
  const hasError = !!(errors && errorMessages);

  return (
    <div className={classNames("", className)} aria-live="polite">
      <TextArea
        {...props}
        value={props.value}
        name={name}
        aria-invalid={hasError}
        className={classNames({
          "border-red-600 transition-colors hover:border-red-600 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50":
            hasError,
        })}
        {...(register && register(name, rules))}
      />
      <ErrorMessage
        errors={errors}
        name={name as any}
        render={({ message }) => (
          <FormErrorMessage className="mt-1">{message}</FormErrorMessage>
        )}
      />
    </div>
  );
};

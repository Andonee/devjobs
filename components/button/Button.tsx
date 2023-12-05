"use client";
import React from "react";

type ButtonProps = {
  label: string;
  onClick: () => void;
  style: "dark" | "light";
  isProcessing?: boolean;
};

export const Button = (props: ButtonProps) => {
  const { label, onClick, style, isProcessing } = props;
  return (
    <button
      onClick={onClick}
      className={` w-full md:w-fit ${
        style === "dark"
          ? "bg-violet hover:bg-lightViolet"
          : "bg-lightGrey hover:bg-violet/30"
      } rounded px-5 py-2 dark:bg-snowy/10 dark:hover:bg-snowy/30`}
    >
      <span className=" flex-between flex w-full items-center gap-3">
        {isProcessing && <span className="loader-button" />}
        <span
          className={`w-full text-base font-bold ${
            style === "dark" ? "text-snowy" : "text-violet"
          } dark:text-snowy`}
        >
          {label}
        </span>
      </span>
    </button>
  );
};

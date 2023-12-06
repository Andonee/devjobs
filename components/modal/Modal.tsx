"use client";
import React, { useEffect } from "react";
import { useTheme } from "next-themes";
import ReactPortal from "./ReactPortal";
import { CloseIcon } from "@/components/icons";

type ModalType = {
  isOpen: boolean;
  onCloseHandler: () => void;
  children: React.ReactNode;
};

export const Modal = (props: ModalType) => {
  const { isOpen, onCloseHandler, children } = props;

  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) =>
      e.key === "Escape" ? onCloseHandler() : null;
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [onCloseHandler]);

  if (!isOpen) return null;

  return (
    <ReactPortal wrappedId={"react-portal-modal-container"}>
      <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center overflow-hidden bg-slate-900/40 pb-10 pl-5 pr-5 pt-10 ">
        <div className="h-fit min-h-[100px] w-[100%] lg:max-w-3xl">
          <div className="flex h-10 w-full justify-end rounded-t-md bg-snowy p-2 dark:bg-darkBlue">
            <button onClick={onCloseHandler}>
              <CloseIcon
                fill={resolvedTheme === "light" ? "#9e7f66" : "#9DAEC2"}
              />
            </button>
          </div>
          <div className="max-h-[calc(100%-40px)] overflow-auto rounded-b-md bg-snowy dark:bg-darkBlue">
            {children}
          </div>
        </div>
      </div>
    </ReactPortal>
  );
};

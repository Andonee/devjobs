import React, { ChangeEvent } from "react";
import { CloseIcon } from "@/components/icons";

const FileTypes = [
  "image/apng",
  "image/bmp",
  "image/gif",
  "image/jpeg",
  "image/pjpeg",
  "image/png",
  "image/svg+xml",
  "image/tiff",
  "image/webp",
  "image/x-icon",
] as const;

type UploadType = {
  files?: File[] | [];
  onUploadClick: (e: ChangeEvent<HTMLInputElement>) => void;
  onRemoveClick: (id: any) => void;
  extensions: (typeof FileTypes)[number][];
};

export const Upload = (props: UploadType) => {
  const { files, onUploadClick, onRemoveClick, extensions } = props;

  return (
    <div className="flex w-full flex-col items-center justify-center gap-3">
      <label
        htmlFor="dropzone-file"
        className="dark:hover:bg-bray-800 flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div className="flex flex-col items-center justify-center pb-6 pt-5">
          <svg
            className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload</span>
          </p>
          <p className="flex gap-1 text-xs text-gray-500 dark:text-gray-400">
            <span>File extension allowed:</span>
            <span className="uppercase">
              {extensions.map((type) => type.split("/")[1])}
            </span>
          </p>
        </div>
        <input
          id="dropzone-file"
          type="file"
          className="hidden"
          onChange={onUploadClick}
          accept={`${extensions.map((type) => type)}`}
          multiple
        />
      </label>
      {files && (
        <div className="w-full">
          {files.map((file, idx) => {
            return (
              <div
                key={`${file.name}_${idx}`}
                className="flex w-full justify-between rounded-lg  border-2 border-gray-300 bg-gray-50 px-4 py-2 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div>{file.name}</div>
                <button onClick={onRemoveClick} className="cursor">
                  <CloseIcon fill={"#9e7f66"} />
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

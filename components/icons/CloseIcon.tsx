import React from "react";

type IconProps = {
  width?: string;
  height?: string;
  fill?: string;
};

export const CloseIcon = (props: IconProps) => {
  const { width, height, fill } = props;
  return (
    <svg
      width={width || "24"}
      height={height || "24"}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m7.99999 7.05732 3.30001-3.3.9427.94267-3.30004 3.3 3.30004 3.30001-.9427.9427-3.30001-3.30004-3.3 3.30004-.94267-.9427 3.3-3.30001-3.3-3.3.94267-.94267z"
        fill={fill || "#001018"}
      />
    </svg>
  );
};

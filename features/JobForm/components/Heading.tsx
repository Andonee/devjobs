import React from "react";

type HeadingType = {
  text: string;
};

const Heading = (props: HeadingType) => {
  const { text } = props;
  return <h2 className="text-center font-medium underline">{text}</h2>;
};

export default Heading;

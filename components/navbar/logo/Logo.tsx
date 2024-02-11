import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
    <div className="h-fit">
      <Link href={"/"}>
        <h1 className="font-bold text-snowy">devjob</h1>
      </Link>
    </div>
  );
};

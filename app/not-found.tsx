import React from "react";

import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex h-full w-full flex-wrap content-center items-center justify-center">
      <div className="flex flex-col gap-10 text-center text-6xl text-violet">
        <span>Page not found</span>
        <span>
          <Link
            href={"/"}
            className="transition-all duration-300 hover:text-violet/60"
          >
            Go to home page
          </Link>
        </span>
      </div>
    </div>
  );
};

export default NotFoundPage;

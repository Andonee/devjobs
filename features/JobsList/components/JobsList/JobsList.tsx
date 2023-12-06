import React from "react";
import { JobCard } from "..";

export const JobsList = () => {
  return (
    <div className=" grid grid-cols-1 gap-x-[30px] gap-y-[60px] md:grid-cols-2 xl:grid-cols-3">
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
    </div>
  );
};

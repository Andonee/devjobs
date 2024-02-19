import React from "react";
import { JobCard } from "./components";
import { getAllJobs } from "@/app/_actions";

async function getData() {
  const res = await getAllJobs();
  if (!res.success) {
    throw new Error("Failed to fetch data");
  }

  return res.data;
}

const noData = (arr: any[]) => arr.length === 0;

export const JobsList = async () => {
  const data = await getData();

  console.log("data", data);
  return (
    <div className=" grid grid-cols-1 gap-x-[30px] gap-y-[60px] md:grid-cols-2 xl:grid-cols-3">
      {!data || noData(data) ? (
        <div>There is no data </div>
      ) : (
        data?.map((job) => (
          <JobCard
            key={job.id}
            position={job.position}
            location={job.location}
            fulltime={job.fulltime}
            company={job.company}
            createdAt={job.createdAt}
          />
        ))
      )}
    </div>
  );
};

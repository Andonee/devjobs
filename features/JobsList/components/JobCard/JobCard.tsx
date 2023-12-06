import Image from "next/image";
import scoot from "@/public/images/scoot.svg";

export const JobCard = () => {
  return (
    <div className="relative flex cursor-pointer flex-col gap-8 rounded-md bg-snowy px-8 py-9 transition-all duration-300 hover:bg-lightViolet/10 dark:bg-darkBlue dark:hover:bg-lightViolet/10">
      <div className="absolute top-0 -translate-y-1/2">
        <Image src={scoot} alt="scoot" width={50} height={50} />
      </div>
      <div className="flex flex-col gap-2 ">
        <div className="flex gap-10  text-darkGrey">
          <span>5h ago</span>
          <span>Full Time</span>
        </div>
        <div className="flex gap-10 font-bold">Senior Software Engineer</div>
        <div className="flex gap-10  text-darkGrey">Scoot</div>
      </div>
      <div className="font-bold text-violet">United Kingdom</div>
    </div>
  );
};

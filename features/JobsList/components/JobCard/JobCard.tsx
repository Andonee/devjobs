import Image from "next/image";
import scoot from "@/public/images/scoot.svg";
import { JobBasicType } from "@/features/Types";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";

export const JobCard = (props: JobBasicType) => {
  const { position, location, fulltime, company, createdAt } = props;

  return (
    <div className="relative flex cursor-pointer flex-col gap-8 rounded-md bg-snowy px-8 py-9 transition-all duration-300 hover:bg-lightViolet/10 dark:bg-darkBlue dark:hover:bg-lightViolet/10">
      <div className="absolute top-0 -translate-y-1/2">
        <Image src={scoot} alt="scoot" width={50} height={50} />
      </div>
      <div className="flex flex-col gap-2 ">
        <div className="flex gap-10  text-darkGrey">
          <time>
            {format(createdAt, "dd MMMM HH:mm", {
              locale: enUS,
            })}
          </time>
          {fulltime ? <span>Full Time</span> : <span>Part Time</span>}
        </div>
        <div className="flex gap-10 font-bold">{position}</div>
        <div className="flex gap-10  text-darkGrey">{company}</div>
      </div>
      <div className="font-bold text-violet">{location}</div>
    </div>
  );
};

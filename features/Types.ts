export type JobBasicType = {
  position: string;
  fulltime: boolean;
  createdAt: Date;
  location: string;
  company: string;
};

export type JobExtensedType = JobBasicType & {
  duties: string;
  description: string;
  requirements: string;
  salary: number;
};

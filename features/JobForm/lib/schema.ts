import { z } from "zod";

export const FormDataSchema = z.object({
  position: z.string().min(1, { message: "Required" }),
  location: z.string().min(1, { message: "Required" }),
  salary: z.coerce.number().min(0, { message: "Required" }),
  fulltime: z.boolean(),
  description: z.string().min(1, { message: "Required" }),
  requirements: z.string().min(1, { message: "Required" }),
  duties: z.string().min(1, { message: "Required" }),
});

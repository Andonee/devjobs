"use server";

import { z } from "zod";
import { FormDataSchema } from "@/features/JobForm/lib/schema";

type Inputs = z.infer<typeof FormDataSchema>;

const addJob = async (data: Inputs) => {
  const result = FormDataSchema.safeParse(data);

  if (result.success) {
    return {
      success: true,
      data: result.data,
    };
  }

  if (result.error) {
    return {
      success: false,
      error: result.error.format(),
    };
  }
};

export { addJob };

"use server";

import { z } from "zod";
import { FormDataSchema } from "@/features/JobForm/lib/schema";
import { prisma } from "@/lib/prisma";

type Inputs = z.infer<typeof FormDataSchema>;

const addJob = async (data: Inputs) => {
  try {
    const result = FormDataSchema.safeParse(data);

    if (result.success) {
      const job = await prisma.job.create({
        data: result.data,
      });

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
  } catch (err) {
    console.error("Could not add job to DB", err);
  }
};

export { addJob };

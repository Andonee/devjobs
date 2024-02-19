"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { FormDataSchema } from "@/features/JobForm/lib/schema";
import { prisma } from "@/lib/prisma";

type Inputs = z.infer<typeof FormDataSchema>;

const addJob = async (data: Inputs) => {
  try {
    const result = FormDataSchema.safeParse(data);

    if (result.success) {
      await prisma.jobs.create({
        data: result.data,
      });
      revalidatePath("/");
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

const getAllJobs = async () => {
  try {
    const jobs = await prisma.jobs.findMany();
    return {
      success: true,
      data: jobs,
    };
  } catch (err) {
    return {
      success: false,
      error: err,
    };
  }
};

export { addJob, getAllJobs };

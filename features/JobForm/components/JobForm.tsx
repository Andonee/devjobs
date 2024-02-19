"use client";
import React, { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Heading from "./Heading";
import { FormTextarea, Button, FormInput, FormCheckbox } from "@/components";
import { FormDataSchema } from "../lib/schema";
import { addJob } from "@/app/_actions";

export const JobForm = () => {
  const [data, setData] = useState<Inputs>();
  const [files, setFiles] = useState<File[] | undefined>();

  const onUploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    fileList && setFiles(Array.from(fileList));
  };

  const router = useRouter();

  type Inputs = z.infer<typeof FormDataSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<Inputs>({
    resolver: zodResolver(FormDataSchema),
  });

  console.log(new Date());

  const onSubmitHandler = handleSubmit(async (data) => {
    await addJob(data);
    reset();
    router.push("/");
  });

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-5">
          <Heading text="Basic position information" />
          <div className="flex flex-col gap-5"></div>
          <FormInput<Inputs>
            id="position"
            type="text"
            name="position"
            label="Position"
            className="mb-2"
            register={register}
            errors={errors}
            required
            defaultValue={watch("position")}
          />
          <FormInput<Inputs>
            id="location"
            type="text"
            name="location"
            label="Location"
            className="mb-2"
            register={register}
            errors={errors}
            required
            defaultValue={watch("location")}
          />
          <FormInput<Inputs>
            id="salary"
            type="number"
            name="salary"
            label="Salary"
            className="mb-2"
            register={register}
            errors={errors}
            required
            defaultValue={watch("salary")}
          />
          <FormCheckbox<Inputs>
            id="fulltime"
            name="fulltime"
            label="Fulltime"
            className="mb-2"
            register={register}
            errors={errors}
            isChecked={watch("fulltime") || false}
          />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <Heading text="Job description" />
        <div className="flex flex-col gap-5">
          <FormTextarea<Inputs>
            id="description"
            name="description"
            label="Job description"
            className="mb-2"
            register={register}
            errors={errors}
            required
            defaultValue={watch("description")}
          />
          <FormTextarea<Inputs>
            id="requirements"
            name="requirements"
            label="Job requirements"
            className="mb-2"
            register={register}
            errors={errors}
            required
            defaultValue={watch("requirements")}
          />
          <FormTextarea<Inputs>
            id="duties"
            name="duties"
            label="Duties"
            className="mb-2"
            register={register}
            errors={errors}
            required
            defaultValue={watch("duties")}
          />
          <Button label="submit" style="dark" />
        </div>
      </div>
    </form>
  );
};

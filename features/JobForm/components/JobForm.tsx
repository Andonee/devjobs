"use client";
import React, { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Heading from "./Heading";
import {
  Checkbox,
  FormTextarea,
  Upload,
  Button,
  FormInput,
  FormCheckbox,
} from "@/components";
import { FormDataSchema } from "../lib/schema";
import { addJob } from "@/app/_actions";

export const JobForm = () => {
  const [data, setData] = useState<Inputs>();
  const [files, setFiles] = useState<File[] | undefined>();

  const onUploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    fileList && setFiles(Array.from(fileList));
  };

  const onRemoveHandler = () => {
    setFiles(undefined);
  };

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

  const onSubmitHandler = handleSubmit(async (data) => {
    console.log(data);
    const result = await addJob(data);
    reset();
    console.log("result", result);
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

          {/* <button
            className="mt-4 transform rounded bg-blue-500 px-4 py-2 font-semibold text-white shadow-md duration-200 hover:-translate-y-1 hover:bg-blue-600 focus:translate-y-1 focus:outline-none disabled:opacity-50"
            type="submit"
          >
            Submit
          </button> */}
          <Button label="submit" style="dark" />
        </div>
      </div>
    </form>
    // <form onSubmit={handleSubmit(onSubmitHandler)}>
    //   <div className="flex flex-col gap-8">
    //     <div className="flex flex-col gap-5">
    //       <Heading text="Basic position information" />
    //       <div className="flex flex-col gap-5">
    //         <FormInput
    //           id="position"
    //           type="text"
    //           name="position"
    //           label="Job position"
    //           register={register}
    //           error={errors["position"]?.message}
    //         />
    //         {/* <Input
    //           name="position"
    //           label="Job position"
    //           onChange={() => {}}
    //           value=""
    //           required
    //           register={register}
    //           error={errors["position"]?.message as string}
    //         /> */}
    //         {/* <Input
    //           name="location"
    //           label="Location"
    //           onChange={() => {}}
    //           value=""
    //         />
    //         <Input name="salary" label="Salary" onChange={() => {}} value="" /> */}
    //         {/* <Checkbox
    //           name="fulltime"
    //           label="fulltime"
    //           onClick={() => {}}
    //           isChecked={false}
    //         /> */}
    //       </div>
    //     </div>
    //     <div className="flex flex-col gap-5">
    //       <Heading text="Job description" />
    //       <div className="flex flex-col gap-5">
    //         {/* <Textarea
    //           name="description"
    //           label="Job description"
    //           onChange={() => {}}
    //           value=""
    //           rows={8}
    //         />
    //         <Textarea
    //           name="requirements"
    //           label="Requirements"
    //           onChange={() => {}}
    //           value=""
    //           rows={10}
    //         />
    //         <Textarea
    //           name="duties"
    //           label="Duties"
    //           onChange={() => {}}
    //           value=""
    //           rows={10}
    //         /> */}
    //       </div>
    //     </div>
    //     <div className="flex flex-col gap-5">
    //       <Heading text="Company info" />
    //       <div className="flex flex-col gap-5">
    //         {/* <Input
    //           name="company"
    //           label="Company"
    //           onChange={() => {}}
    //           value=""
    //         />
    //         <Input
    //           name="website"
    //           label="Website"
    //           onChange={() => {}}
    //           value=""
    //         /> */}
    //         {/* <Upload
    //           files={files}
    //           onUploadClick={onUploadHandler}
    //           onRemoveClick={onRemoveHandler}
    //           extensions={["image/svg+xml"]}
    //         /> */}
    //       </div>
    //     </div>

    //     {/* <Button label="Post" style="dark" onClick={onSubmitHandler} /> */}
    //     <input type="submit" />
    //   </div>
    // </form>
  );
};

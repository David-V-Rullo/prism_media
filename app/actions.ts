"use server";
import { revalidatePath } from "next/cache";
import prisma from "./db";
import { z } from "zod";

type OwnerData = {
  name: string;
  email: string;
};
export async function createBillboard(previousState: any, formData: FormData) {
  try {
    const billboard = await prisma.billboard.create({
      data: formData,
    });
    revalidatePath("/");
    return billboard;
  } catch (error) {
    console.error("Error creating billboard:", error);
    throw error;
  }
}

export async function createOwner(previousState: any, formData: FormData) {
  //   const formDataEntries = formData.entries();
  const objectFromFormData = (formData: FormData) => {
    const data: Partial<OwnerData> = {};
    formData.forEach((value, key) => {
      if (key === "name" || key === "email") {
        data[key as keyof OwnerData] = value as string;
      }
    });
    return data;
  };

  const formDataObject = objectFromFormData(formData);
  console.log("formDataEntries", formDataObject);
  console.log("formData", formData);
  const schema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
  });
  const parsed = schema.parse(formDataObject);

  try {
    const Owner = await prisma.owner.create({
      data: parsed,
    });
    revalidatePath("/");
    return { message: `Owner ${Owner.name} created successfully!` };
  } catch (error) {
    console.error("Error creating owner:", error);
    throw error;
  }
}

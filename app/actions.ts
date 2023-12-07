"use server";
import { revalidatePath } from "next/cache";
import prisma from "./db";
import { z } from "zod";

type OwnerData = {
  name: string;
  email: string;
};

const objectFromFormData = (formData: FormData): Record<string, string> => {
  const data: Record<string, string> = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });
  return data;
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

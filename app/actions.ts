"use server";
import { BillboardFormData } from "@/types";
import { revalidatePath } from "next/cache";
import prisma from "./db";

export async function createBillboard(
  previousState: any,
  formData: BillboardFormData
) {
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

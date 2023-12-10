"use server";
import { revalidatePath } from "next/cache";
import prisma from "./db";
import { z } from "zod";
import type { OwnerData } from "../types";

export async function createBillboard(previousState: any, formData: FormData) {
  const BillboardDataSchema = z.object({
    billboardName: z.string().optional(),
    market: z.string().optional(),
    vendor: z.string().optional(),
    mediaType: z.string().optional(),
    unitNumber: z.string().optional(),
    tabId: z.string().optional(),
    numberOfUnits: z.number().optional(),
    description: z.string().optional(),
    face: z.string().optional(),
    size: z.string().optional(),
    pixels: z.string().optional(),
    illuminated: z.boolean().optional(),
    weeklyEOIs: z.number().optional(),
    fourWeekImp: z.number().optional(),
    latitude: z.number().optional(),
    longitude: z.number().optional(),
    availableTiming: z.string().optional(),
    fourWeekRateCard: z.number().optional(),
    fourWeekNegotiatedCost: z.number().optional(),
    installsIncluded: z.number().optional(),
    additionalInstallCost: z.number().optional(),
    productionCost: z.number().optional(),
    shippingAddress: z.string().optional(),
    artworkDeadline: z.date().optional(),
    ownerId: z.number(),
  });
  const objectFromFormData = (formData: FormData) => {
    return Object.fromEntries(formData.entries());
  };
  const data = objectFromFormData(formData);
  console.log(typeof data.ownerId);
  try {
    if (typeof data.ownerId !== "number") {
      data.ownerId = 14;
    }

    const parsedData = BillboardDataSchema.parse(data);

    const billboard = await prisma.bridgeBillboard.create({
      data: parsedData,
    });
    revalidatePath("/");
    return billboard;
  } catch (error) {
    console.error("Error creating billboard:", error);
    throw error;
  }
}

export async function createOwner(previousState: any, formData: FormData) {
  const objectFromFormData = (formData: FormData) => {
    return Object.fromEntries(formData.entries());
  };

  const formDataObject = objectFromFormData(formData);

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

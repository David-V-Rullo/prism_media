"use server";
import { revalidatePath } from "next/cache";
import prisma from "./db";
import { z } from "zod";
import type { OwnerData } from "../../types";
import type { BillboardData } from "../../types";

export async function createBillboard(previousState: any, formData: FormData) {
  console.log("formData", formData);
  const BillboardDataSchema = z.object({
    billboardName: z.string(),
    market: z.string().optional(),
    vendor: z.string().optional(),
    mediaType: z.string(),
    unitNumber: z.string().optional(),
    tabId: z.string().optional(),
    description: z.string().optional(),
    face: z.string().optional(),
    sizeX: z.string(),
    sizeY: z.string(),
    pixels: z.string().optional(),
    illuminated: z.boolean().optional(),
    weeklyEOIs: z.number().optional(),
    fourWeekImp: z.number().optional(),
    latitude: z.string().transform((val) => parseFloat(val)),
    longitude: z.string().transform((val) => parseFloat(val)),
    availableTiming: z.string().optional(),
    fourWeekRateCard: z.number().optional(),
    fourWeekNegotiatedCost: z.number().optional(),
    installsIncluded: z.number().optional(),
    additionalInstallCost: z.number().optional(),
    productionCost: z.number().optional(),
    shippingAddress: z.string().optional(),
    artworkDeadline: z.date().optional(),
    ownerId: z.number().default(14),
  });

  const data = Object.fromEntries(formData.entries());
  try {
    const parsedData = BillboardDataSchema.parse(data);
    const billboard = await prisma.billboard.create({
      data: parsedData,
    });
    revalidatePath("/owners");
    return billboard;
  } catch (error) {
    console.error("Error creating billboard:", error);
    throw error;
  }
}

export async function createOwner(previousState: any, formData: FormData) {
  const formDataObject = Object.fromEntries(formData.entries());

  const schema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
  });
  const parsedData = schema.parse(formDataObject);

  try {
    const Owner = await prisma.owner.create({
      data: parsedData,
    });
    revalidatePath("/");
    return { message: `Owner ${Owner.name} created successfully!` };
  } catch (error) {
    console.error("Error creating owner:", error);
    throw error;
  }
}
export async function getBillboards(id: number) {
  try {
    const billboards = await prisma.billboard.findMany({
      where: {
        ownerId: id,
      },
    });
    return billboards;
  } catch (error) {
    console.error("Error getting billboards:", error);
    throw error;
  }
}

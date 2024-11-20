import { Office, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getOffices(): Promise<Office[]> {
  try {
    const offices = await prisma.office.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    return offices;
  } catch (error) {
    console.log("OFFICE", error);
    throw new Error("Failed to fetch the Jobs");
  }
}

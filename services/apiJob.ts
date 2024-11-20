import { Job, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getJobs(): Promise<Job[]> {
  try {
    const jobs = await prisma.job.findMany({
      select: {
        id: true,
        title: true,
      },
    });

    return jobs;
  } catch (error) {
    console.log("Job", error);
    throw new Error("Failed to fetch the JOBS");
  }
}

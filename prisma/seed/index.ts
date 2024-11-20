import { PrismaClient } from "@prisma/client";

import { employess, jobs, departments, offices } from "@/lib/placeholder-data";

const prisma = new PrismaClient();

async function seedJobs() {
  await prisma.job.deleteMany();

  await prisma.job.createMany({
    data: jobs,
  });
}

async function seedOffices() {
  await prisma.office.deleteMany();

  await prisma.office.createMany({
    data: offices,
  });
}

async function seedDepartaments() {
  await prisma.department.deleteMany();

  await prisma.department.createMany({
    data: departments,
  });
}

async function seedEmployees() {
  await prisma.employee.deleteMany();

  await prisma.employee.createMany({
    data: employess,
  });
}

export async function seedAll() {
  try {
    await seedJobs();
    await seedOffices();
    await seedDepartaments();
    await seedEmployees();

    console.log("DONE");
  } catch (error) {
    console.log(error);
  }
}

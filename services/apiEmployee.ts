import { unstable_noStore as noStore } from "next/cache";

import { EmployeeStatus, PrismaClient } from "@prisma/client";
import { EmployeesTable } from "@/types";

import { PAGE_SIZE } from "@/lib/constants";
import { filterValue } from "@/lib/utils";

const prisma = new PrismaClient();

export async function getFilteredEmployees({
  query,
  status,
  job,
  office,
  currentPage,
}: {
  query: string;
  status: string;
  job: string;
  office: string;
  currentPage: number;
}): Promise<EmployeesTable[]> {
  noStore();

  const employeeStatus = filterValue(status) as EmployeeStatus;
  const employeeJob = filterValue(job);
  const employeeOffice = filterValue(office);

  const offset = (currentPage - 1) * PAGE_SIZE;

  try {
    const employees = await prisma.employee.findMany({
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        selected: true,
        status: true,
        image: true,
        job: { select: { title: true } },
        department: { select: { name: true } },
        office: { select: { name: true } },
        lineManager: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
      },
      where: {
        AND: [
          {
            OR: [
              { firstName: { contains: query, mode: "insensitive" } },
              { lastName: { contains: query, mode: "insensitive" } },
              {
                department: {
                  name: { contains: query, mode: "insensitive" },
                },
              },
            ],
          },
          status ? { status: { equals: employeeStatus } } : {},
          job
            ? { job: { title: { equals: employeeJob, mode: "insensitive" } } }
            : {},
          office
            ? {
                office: {
                  name: { equals: employeeOffice, mode: "insensitive" },
                },
              }
            : {},
        ],
      },
      take: PAGE_SIZE,
      skip: offset,
      orderBy: {
        createdAt: "desc",
      },
    });

    return employees;
  } catch (error) {
    throw new Error("Failed to fetch the Employees");
  } finally {
    await prisma.$disconnect();
  }
}

export async function getEmployeePages({
  query,
  status,
  job,
  office,
}: {
  query: string;
  status: string;
  job: string;
  office: string;
}) {
  const employeeStatus = filterValue(status) as EmployeeStatus;
  const employeeJob = filterValue(job);
  const employeeOffice = filterValue(office);

  try {
    const count = await prisma.employee.count({
      where: {
        AND: [
          {
            OR: [
              { firstName: { contains: query, mode: "insensitive" } },
              { lastName: { contains: query, mode: "insensitive" } },
              {
                department: { name: { contains: query, mode: "insensitive" } },
              },
            ],
          },
          status ? { status: { equals: employeeStatus } } : {},
          job
            ? { job: { title: { equals: employeeJob, mode: "insensitive" } } }
            : {},
          office
            ? {
                office: {
                  name: { equals: employeeOffice, mode: "insensitive" },
                },
              }
            : {},
        ],
      },
    });

    return count;
  } catch (error) {
    throw new Error("Failed to fetch the Employees Count");
  } finally {
    await prisma.$disconnect();
  }
}

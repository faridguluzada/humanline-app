"use server";

import { z } from "zod";

import { dateTransformer } from "@/lib/utils";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

const EmployeeSchema = z.object({
  firstName: z.string().min(1, { message: "First Name is required" }),
  lastName: z.string().min(1, { message: "Last Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  joinDate: z.string().min(1, { message: "Join Date is required" }),
});

type EmployeeSchemaZod = {
  errors?: {
    firstName?: string[] | undefined;
    lastName?: string[] | undefined;
    email?: string[] | undefined;
    joinDate?: string[] | undefined;
  };
  message?: string | null;
};

export async function createEmployee(
  prevState: any,
  formData: FormData
): Promise<EmployeeSchemaZod> {
  const validatedFields = EmployeeSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    joinDate: formData.get("joinDate"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Employee.",
    };
  }

  const joinDate = dateTransformer(validatedFields.data.joinDate);

  try {
    await prisma.employee.create({
      data: {
        ...validatedFields.data,
        joinDate,
      },
    });

    // re-fetch the data for accessibility
    revalidatePath("/dashboard/employees");
    return { message: "Employee created successfully", errors: {} };
  } catch (error: any) {
    return { message: "Failed to create Employee", errors: error.message };
  } finally {
    await prisma.$disconnect();
  }
}

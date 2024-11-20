/*
  Warnings:

  - You are about to drop the column `DateOfBirth` on the `Employee` table. All the data in the column will be lost.
  - You are about to drop the column `JoinDate` on the `Employee` table. All the data in the column will be lost.
  - Added the required column `joinDate` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Employee` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Employee" DROP COLUMN "DateOfBirth",
DROP COLUMN "JoinDate",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "dateOfBirth" TIMESTAMP(3),
ADD COLUMN     "joinDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

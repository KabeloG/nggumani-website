/*
  Warnings:

  - Made the column `phone` on table `Appointment` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Appointment" ALTER COLUMN "phone" SET NOT NULL,
ALTER COLUMN "dateTime" SET DATA TYPE TEXT;

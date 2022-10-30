/*
  Warnings:

  - Added the required column `description` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `localization` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `openingHours` to the `Company` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Company" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "localization" TEXT NOT NULL,
ADD COLUMN     "openingHours" TEXT NOT NULL;

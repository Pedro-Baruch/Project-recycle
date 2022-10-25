/*
  Warnings:

  - Added the required column `updateAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "activated" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "confirmationToken" TEXT,
ADD COLUMN     "updateAt" TIMESTAMP(3) NOT NULL;

/*
  Warnings:

  - You are about to drop the column `adSituationId` on the `CompanyRequests` table. All the data in the column will be lost.
  - You are about to drop the column `adSituationId` on the `UserRequests` table. All the data in the column will be lost.
  - You are about to drop the `AdSituation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CompanyRequests" DROP CONSTRAINT "CompanyRequests_adSituationId_fkey";

-- DropForeignKey
ALTER TABLE "UserRequests" DROP CONSTRAINT "UserRequests_adSituationId_fkey";

-- DropIndex
DROP INDEX "CompanyRequests_adSituationId_key";

-- DropIndex
DROP INDEX "UserRequests_adSituationId_key";

-- AlterTable
ALTER TABLE "CompanyRequests" DROP COLUMN "adSituationId",
ADD COLUMN     "accepted" BOOLEAN;

-- AlterTable
ALTER TABLE "UserRequests" DROP COLUMN "adSituationId",
ADD COLUMN     "accepted" BOOLEAN;

-- DropTable
DROP TABLE "AdSituation";

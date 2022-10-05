-- CreateTable
CREATE TABLE "CompanyRequests" (
    "id" TEXT NOT NULL,
    "adId" TEXT NOT NULL,
    "companyProfileId" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assignedBy" TEXT NOT NULL,
    "adSituationId" TEXT NOT NULL,

    CONSTRAINT "CompanyRequests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserRequests" (
    "id" TEXT NOT NULL,
    "adId" TEXT NOT NULL,
    "userProfileId" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assignedBy" TEXT NOT NULL,
    "adSituationId" TEXT NOT NULL,

    CONSTRAINT "UserRequests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AdSituation" (
    "id" TEXT NOT NULL,
    "sutuation" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AdSituation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CompanyRequests_adSituationId_key" ON "CompanyRequests"("adSituationId");

-- CreateIndex
CREATE UNIQUE INDEX "UserRequests_adSituationId_key" ON "UserRequests"("adSituationId");

-- AddForeignKey
ALTER TABLE "CompanyRequests" ADD CONSTRAINT "CompanyRequests_adId_fkey" FOREIGN KEY ("adId") REFERENCES "Ad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanyRequests" ADD CONSTRAINT "CompanyRequests_companyProfileId_fkey" FOREIGN KEY ("companyProfileId") REFERENCES "CompanyProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanyRequests" ADD CONSTRAINT "CompanyRequests_adSituationId_fkey" FOREIGN KEY ("adSituationId") REFERENCES "AdSituation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserRequests" ADD CONSTRAINT "UserRequests_adId_fkey" FOREIGN KEY ("adId") REFERENCES "Ad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserRequests" ADD CONSTRAINT "UserRequests_userProfileId_fkey" FOREIGN KEY ("userProfileId") REFERENCES "UserProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserRequests" ADD CONSTRAINT "UserRequests_adSituationId_fkey" FOREIGN KEY ("adSituationId") REFERENCES "AdSituation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

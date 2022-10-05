-- CreateTable
CREATE TABLE "Denounce" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Denounce_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompanyDenouncesAd" (
    "denounceId" TEXT NOT NULL,
    "adId" TEXT NOT NULL,
    "companyProfileId" TEXT NOT NULL,

    CONSTRAINT "CompanyDenouncesAd_pkey" PRIMARY KEY ("adId","companyProfileId","denounceId")
);

-- CreateTable
CREATE TABLE "UserDenouncesAd" (
    "denounceId" TEXT NOT NULL,
    "adId" TEXT NOT NULL,
    "userProfileId" TEXT NOT NULL,

    CONSTRAINT "UserDenouncesAd_pkey" PRIMARY KEY ("adId","userProfileId","denounceId")
);

-- CreateTable
CREATE TABLE "DenounceBetweenUserAndCompany" (
    "denounceId" TEXT NOT NULL,
    "companyProfileId" TEXT NOT NULL,
    "userProfileId" TEXT NOT NULL,

    CONSTRAINT "DenounceBetweenUserAndCompany_pkey" PRIMARY KEY ("companyProfileId","userProfileId","denounceId")
);

-- AddForeignKey
ALTER TABLE "CompanyDenouncesAd" ADD CONSTRAINT "CompanyDenouncesAd_denounceId_fkey" FOREIGN KEY ("denounceId") REFERENCES "Denounce"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanyDenouncesAd" ADD CONSTRAINT "CompanyDenouncesAd_adId_fkey" FOREIGN KEY ("adId") REFERENCES "Ad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanyDenouncesAd" ADD CONSTRAINT "CompanyDenouncesAd_companyProfileId_fkey" FOREIGN KEY ("companyProfileId") REFERENCES "CompanyProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserDenouncesAd" ADD CONSTRAINT "UserDenouncesAd_denounceId_fkey" FOREIGN KEY ("denounceId") REFERENCES "Denounce"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserDenouncesAd" ADD CONSTRAINT "UserDenouncesAd_adId_fkey" FOREIGN KEY ("adId") REFERENCES "Ad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserDenouncesAd" ADD CONSTRAINT "UserDenouncesAd_userProfileId_fkey" FOREIGN KEY ("userProfileId") REFERENCES "UserProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DenounceBetweenUserAndCompany" ADD CONSTRAINT "DenounceBetweenUserAndCompany_denounceId_fkey" FOREIGN KEY ("denounceId") REFERENCES "Denounce"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DenounceBetweenUserAndCompany" ADD CONSTRAINT "DenounceBetweenUserAndCompany_companyProfileId_fkey" FOREIGN KEY ("companyProfileId") REFERENCES "CompanyProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DenounceBetweenUserAndCompany" ADD CONSTRAINT "DenounceBetweenUserAndCompany_userProfileId_fkey" FOREIGN KEY ("userProfileId") REFERENCES "UserProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

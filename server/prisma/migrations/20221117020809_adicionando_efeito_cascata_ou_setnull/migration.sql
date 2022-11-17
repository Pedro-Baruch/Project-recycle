-- DropForeignKey
ALTER TABLE "Ad" DROP CONSTRAINT "Ad_userProfileId_fkey";

-- DropForeignKey
ALTER TABLE "AdByTag" DROP CONSTRAINT "AdByTag_adId_fkey";

-- DropForeignKey
ALTER TABLE "CompanyProfile" DROP CONSTRAINT "CompanyProfile_companyId_fkey";

-- DropForeignKey
ALTER TABLE "CompanyProfile" DROP CONSTRAINT "CompanyProfile_userId_fkey";

-- DropForeignKey
ALTER TABLE "DenounceBetweenUserAndCompany" DROP CONSTRAINT "DenounceBetweenUserAndCompany_companyProfileId_fkey";

-- DropForeignKey
ALTER TABLE "DenounceBetweenUserAndCompany" DROP CONSTRAINT "DenounceBetweenUserAndCompany_denounceId_fkey";

-- DropForeignKey
ALTER TABLE "DenounceBetweenUserAndCompany" DROP CONSTRAINT "DenounceBetweenUserAndCompany_userProfileId_fkey";

-- DropForeignKey
ALTER TABLE "Tag" DROP CONSTRAINT "Tag_userProfileId_fkey";

-- DropForeignKey
ALTER TABLE "UserDenouncesAd" DROP CONSTRAINT "UserDenouncesAd_adId_fkey";

-- DropForeignKey
ALTER TABLE "UserDenouncesAd" DROP CONSTRAINT "UserDenouncesAd_denounceId_fkey";

-- DropForeignKey
ALTER TABLE "UserDenouncesAd" DROP CONSTRAINT "UserDenouncesAd_userProfileId_fkey";

-- DropForeignKey
ALTER TABLE "UserProfile" DROP CONSTRAINT "UserProfile_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserRequests" DROP CONSTRAINT "UserRequests_adId_fkey";

-- DropForeignKey
ALTER TABLE "UserRequests" DROP CONSTRAINT "UserRequests_userProfileId_fkey";

-- AlterTable
ALTER TABLE "Tag" ALTER COLUMN "userProfileId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Ad" ADD CONSTRAINT "Ad_userProfileId_fkey" FOREIGN KEY ("userProfileId") REFERENCES "UserProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserProfile" ADD CONSTRAINT "UserProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanyProfile" ADD CONSTRAINT "CompanyProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanyProfile" ADD CONSTRAINT "CompanyProfile_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tag" ADD CONSTRAINT "Tag_userProfileId_fkey" FOREIGN KEY ("userProfileId") REFERENCES "UserProfile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AdByTag" ADD CONSTRAINT "AdByTag_adId_fkey" FOREIGN KEY ("adId") REFERENCES "Ad"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserRequests" ADD CONSTRAINT "UserRequests_adId_fkey" FOREIGN KEY ("adId") REFERENCES "Ad"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserRequests" ADD CONSTRAINT "UserRequests_userProfileId_fkey" FOREIGN KEY ("userProfileId") REFERENCES "UserProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserDenouncesAd" ADD CONSTRAINT "UserDenouncesAd_denounceId_fkey" FOREIGN KEY ("denounceId") REFERENCES "Denounce"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserDenouncesAd" ADD CONSTRAINT "UserDenouncesAd_adId_fkey" FOREIGN KEY ("adId") REFERENCES "Ad"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserDenouncesAd" ADD CONSTRAINT "UserDenouncesAd_userProfileId_fkey" FOREIGN KEY ("userProfileId") REFERENCES "UserProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DenounceBetweenUserAndCompany" ADD CONSTRAINT "DenounceBetweenUserAndCompany_denounceId_fkey" FOREIGN KEY ("denounceId") REFERENCES "Denounce"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DenounceBetweenUserAndCompany" ADD CONSTRAINT "DenounceBetweenUserAndCompany_companyProfileId_fkey" FOREIGN KEY ("companyProfileId") REFERENCES "CompanyProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DenounceBetweenUserAndCompany" ADD CONSTRAINT "DenounceBetweenUserAndCompany_userProfileId_fkey" FOREIGN KEY ("userProfileId") REFERENCES "UserProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

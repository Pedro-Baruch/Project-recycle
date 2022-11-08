import { prisma } from "../../database/prismaClient";
import { AdService } from "../ads/adService";
import { CompanyService } from "../companies/companyService";

export class AdminService {
  getAds = async () => {
    const ads = await prisma.ad.findMany({
      where: { validated: null },
    });

    return ads;
  };

  authorizeAd = async (adId: string, validated: boolean) => {
    const adService = new AdService();
    await adService.getAd(adId);

    const verifiedAd = await prisma.ad.update({
      where: {
        id: adId,
      },
      data: {
        validated,
      },
    });

    return verifiedAd;
  };

  getCompanies = async () => {
    const companies = await prisma.company.findMany({
      where: { validated: null },
    });

    return companies;
  };

  authorizeCompany = async (companyId: string, validated: boolean) => {
    const companyService = new CompanyService();
    await companyService.getCompany(companyId);

    const verifiedCompany = await prisma.company.update({
      where: {
        id: companyId,
      },
      data: {
        validated,
      },
    });

    return verifiedCompany;
  };
}

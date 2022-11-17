export interface IAdResponse {
  id: string;
  title: string;
  description: string;
  validated: boolean | null;
  price: number;
  userProfileId: string;
  createdAt: Date;
}

export interface Ad {
  id: string;
  title: string;
  description: string;
  price: number;
  userProfileId: string
  userProfile: {
    profilePictureUrl: string
    user: {
      name: string
    }
  }
}
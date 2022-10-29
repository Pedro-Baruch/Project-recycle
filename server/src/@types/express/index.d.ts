declare namespace Express {
  export interface Request {
    user: {
      profileId: string;
      userId: string;
    };
  }
}

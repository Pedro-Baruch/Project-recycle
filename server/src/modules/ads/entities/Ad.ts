export class Ad {
  id?: string;
  title!: string;
  description!: string;
  validated!: boolean;
  price!: number;
  createdAt!: Date;
  userProfileId!: string;
}

export class Ad {
  id?: string;
  title!: string;
  description!: string;
  validated!: boolean | null;
  price!: number;
  createdAt!: Date;
  userProfileId!: string;
}

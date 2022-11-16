export class Company {
  id?: string;
  name!: string;
  cnpj!: string;
  validated!: boolean | null;
  openingHours!: string;
  localization!: string;
  description!: string;
}

import { Joi, Segments } from "celebrate";

export const companyRegistrationValidator = {
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required().messages({
      "string.empty": `O campo name não pode ser vazio!`,
    }),

    cnpj: Joi.string().required().messages({
      "string.empty": `O campo CNPJ não pode ser vazio!`,
    }),

    localization: Joi.string().required().messages({
      "string.empty": `O campo localization não pode ser vazio!`,
    }),

    description: Joi.string().required().messages({
      "string.empty": `O campo description não pode ser vazio!`,
    }),

    openingHours: Joi.string().required().messages({
      "string.empty": `O campo openingHours não pode ser vazio!`,
    }),
  }),
};

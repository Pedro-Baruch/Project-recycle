import { Joi, Segments } from 'celebrate'

export const companyRegistrationValidator = {
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required().messages({
      'string.empty': `O campo name não pode ser vazio!`
    }),

    cnpj: Joi.string().required().messages({
      'string.empty': `O campo CNPJ não pode ser vazio!`
    }),
  })
}
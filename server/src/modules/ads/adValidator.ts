import { Joi, Segments } from 'celebrate'

export const adRegistrationValidator = {
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().required().messages({
      'string.empty': `O campo title não pode ser vazio!`
    }),

    description: Joi.string().required().messages({
      'string.empty': `O campo description não pode ser vazio!`
    }),

    price: Joi.number().required().messages({
      'number.empty': `O campo price não pode ser vazio!`
    }),
  })
}
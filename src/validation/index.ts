import * as yup from 'yup';

export const emailSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required()
})

export const passSchema = yup.object().shape({
  password: yup
    .string()
    .min(8)
    .required()
})

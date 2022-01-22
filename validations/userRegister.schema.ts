import * as yup from 'yup';

export const userRegisterSchema = yup
  .object({
    firstName: yup.string().required('Le Prénom est obligatoire'),
    lastName: yup.string().required('Le Postnom est obligatoire'),
    userName: yup.string().required('Le username est obligatoire'),
    email: yup.string().email().required('Email est obligatoire'),
    password: yup.string().required(),
    age: yup.number().positive().integer().required(),
  })
  .required();

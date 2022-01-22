import * as yup from 'yup';

export const userRegisterSchema = yup
  .object({
    firstName: yup.string().required('Le Prenom est obligatoire'),
    lastName: yup.string().required('Le Postnom est obligatoire'),
    userName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    age: yup.number().positive().integer().required(),
  })
  .required();

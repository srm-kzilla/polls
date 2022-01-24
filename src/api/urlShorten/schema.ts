import * as yup from 'yup';

export const urlSchema = yup.object().shape({
  longUrl: yup.string().required(),
  adminId: yup.string().required(),
});

import * as yup from 'yup';

const OptionSchema = yup.object().shape({
  value: yup.string().required(),
  count: yup.number().required(),
  id: yup.string().required(),
});

export const DataSchema = yup.object({
  question: yup.string().required(),
  options: yup.array().of(OptionSchema).required(),
  userId: yup.string().required(),
  adminId: yup.string().required(),
  validTill: yup.number().default(1).required(),
  createdAt: yup.date().default(new Date()).notRequired(),
  shortUrl: yup.string().default('NaN').required(),
});

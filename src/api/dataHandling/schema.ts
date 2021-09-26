import * as yup from 'yup'
import { string } from 'yup/lib/locale'

const OptionSchema=yup.object().shape({
    value: yup.string().required(),
    count: yup.number().required(),
    ID: yup.string().required()
})

export const DataSchema=yup.object({
    Question: yup.string().required(),
    opt: yup.array().of(OptionSchema).required(),
    userID: yup.string().required(),
    adminUnique: yup.string().required()
})



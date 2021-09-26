import * as yup from 'yup'
import { string } from 'yup/lib/locale'

const opt=yup.object().shape({
    value: yup.string().required(),
    count: yup.number().required(),
    ID: yup.string().required()
})
const data={
    Question: yup.string().required(),
    opt: yup.array().of(opt).required(),
    userID: yup.string().required(),
    adminUnique: yup.string().required()
}

export const dataSchema=new yup.ObjectSchema(data)

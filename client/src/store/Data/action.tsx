import { optType } from "../../pages/HompePage"

export interface dataType{
    Question: string,
    opt: optType['opt'],
    adminUnique: string,
    userID: string
}

export const addData=(data: dataType)=>{
    return(
       {
           type: 'ADD_DATA',
           payload: data
       }
    )
}
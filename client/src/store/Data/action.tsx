import { Option } from "../../pages/HompePage"

export interface DataType{
    Question: string,
    opt: Option[],
    adminUnique: string,
    userID: string
}

export const addData=(data: DataType)=>{
    return(
       {
           type: 'ADD_DATA',
           payload: data
       }
    )
}
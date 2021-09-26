import { DataReceived } from "../../shared/customTypes"
import database from "../../shared/database"


export const addData=async (data : DataReceived)=>{
    try{
         console.log(data)
         await(await database()).collection("polls").insertOne({...data})
    }catch(error)
    {
        console.log(error)
    }
}
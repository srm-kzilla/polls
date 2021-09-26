import { dataReceived } from "../../shared/customTypes"
import database from "../../shared/database"


export const addData=async (data : dataReceived)=>{
    try{
         console.log(data)
         await(await database()).collection("polls").insertOne({...data,adminID: " "})
    }catch(error)
    {
        console.log(error)
    }
}
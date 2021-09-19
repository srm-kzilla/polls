import { dataReceived, paramData, voteData } from "../shared/customTypes";
import database  from "../shared/database";


export const receiveData=async (data : dataReceived,callback)=>{
      try{
          await(await database()).collection('polls').insertOne(data);
          callback(true)
      }catch(error){
        console.log(error)
      }
}

export const sendData=async (data : paramData,callback)=>{
     try{
        const databaseResponse=await(await database()).collection('polls').findOne({uniqueID: data.uniqueID})
        if(databaseResponse===null) throw Error('No Polls with that Unique ID')
        callback(true)
     }catch(error){
          console.log(error)
     }
}

export const sendVote=(data : voteData,callback)=>{
     try{
         callback(true)
     }catch(error){
         console.log(error)
     } 
}
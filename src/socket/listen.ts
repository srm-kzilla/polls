import { Socket } from "socket.io";
import { DataReceived, ParamData, VoteData } from "../shared/customTypes";
import database  from "../shared/database";
import { ackHandler, sendData, sendUpdatedVote } from "./emit";


export const receiveData=async (data : DataReceived,io: any,socket: Socket)=>{
      try{
          console.log(data);
          await(await database()).collection('polls').insertOne({...data,adminID: socket.id});
          ackHandler(io,socket,{sucess: true,msg: "Poll Created Successfully"});
      }catch(error){
          console.log(error)
          ackHandler(io,socket,{sucess: false,msg: "Error in creating Poll"});
      }
}

export const sendDataHandler=async (data : ParamData,io: any,socket: Socket)=>{
     try{
        console.log(data)
        const databaseResponse=await(await database()).collection('polls').findOne({uniqueID: data.uniqueID})
        if(databaseResponse===null) throw Error('No Polls with that Unique ID')
        sendData(io,socket,databaseResponse);
     }catch(error){
          console.log(error)
          ackHandler(io,socket,{sucess: false,msg: error.message});
     }
}

export const voteHandler=async (data : VoteData,io: any)=>{
     try{
         console.log(data)
         await(await database()).collection('polls').updateOne({uniqueID: data.uniqueID,"optData.data.num": parseInt(data.ID)}, {$inc: {"optData.$.count" : 1}});
         const dataFetched=await(await database()).collection('polls').findOne({uniqueID: data.uniqueID})
         console.log(dataFetched)
         sendUpdatedVote(io,dataFetched)
        //await (await database()).collection('User').updateOne({email: e.email, "Registered.ID": e.userID},{$set : {"Registered.$.scheduled": false, "Registered.$.scheduleDate": obj.selectedDate,"Registered.$.hospitalID": obj.hospitalID}})  
     }catch(error){
         console.log(error)
     } 
}
import { Socket } from "socket.io"
import { DataReceived, ParamData, VoteData } from "../shared/customTypes"
import sockEvents from "../shared/sockEvents"
import { receiveData ,sendDataHandler,voteHandler} from "./listen"

const {recv,send,vote}=sockEvents

export const intialize=(socket : Socket,io : any)=>{
   console.log("INTIALLIZED")
     //Socket Event to Where Question Data is Received and Added to Database
    socket.on("sendFormData",(data : DataReceived) => receiveData(data,io,socket))

    // Send the Question Data to Whoever connects with req param as unique ID for poll
    socket.on("getData",(data: ParamData)=>(sendDataHandler(data,io,socket)))

    // Vote Event Where User sends the vote
    socket.on("vote",(data: VoteData)=>(voteHandler(data,io)))
}




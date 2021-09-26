import { Socket } from "socket.io"
import { dataReceived, paramData, voteData } from "../shared/customTypes"
import sockEvents from "../shared/sockEvents"
import { receiveData ,sendDataHandler,voteHandler} from "./listen"

const {recv,send,vote}=sockEvents

export const intialize=(socket : Socket,io : any)=>{
   console.log("INTIALLIZED")
     //Socket Event to Where Question Data is Received and Added to Database
    socket.on("sendFormData",(data : dataReceived) => receiveData(data,io,socket))

    // Send the Question Data to Whoever connects with req param as unique ID for poll
    socket.on("getData",(data: paramData)=>(sendDataHandler(data,io,socket)))

    // Vote Event Where User sends the vote
    socket.on("vote",(data: voteData)=>(voteHandler(data,io)))
}




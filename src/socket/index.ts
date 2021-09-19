import { Socket } from "socket.io"
import sockEvents from "../shared/sockEvents"
import { receiveData ,sendData,sendVote} from "./listen"

const {recv,send,vote}=sockEvents

export const intialize=(socket : Socket)=>{

     //Socket Event to Where Question Data is Received and Added to Database
     socket.on(recv,(receiveData))

    // Send the Question Data to Whoever connects with req param as unique ID for poll
    socket.on(send,(sendData))

    // Vote Event Where User sends the vote
    socket.on(vote,(sendVote))
}




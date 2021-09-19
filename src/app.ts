import express from "express";
import config from "./config";
import { Server} from "socket.io";
import sockEvents from "./shared/sockEvents";
import { intialize } from "./socket";

const startServer=()=>{
    const app=express();

    const httpServer=app.listen(config.port,()=>{
        console.log("RUNNING")
    })

   const io=new Server(httpServer,config.corsParms);

   io.on(sockEvents.connect,intialize)
}

startServer();
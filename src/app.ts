import express from "express";
import config from "./config";
import { Server, Socket} from "socket.io";
import sockEvents from "./shared/sockEvents";
import { intialize } from "./socket";
import route from  './api'
import cors from 'cors'
import bodyParser from "body-parser";

const startServer=()=>{
    const app=express();
    app.use(cors())
    app.use(bodyParser.json())
    app.use("/",route());
     
    const httpServer=app.listen(config.port,()=>{
        console.log("RUNNING")
    })

   const io=new Server(httpServer,config.corsParms);

   io.on(sockEvents.connect,(socket: Socket)=>intialize(socket,io))
}

startServer();
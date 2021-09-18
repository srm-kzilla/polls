import express from "express";
import config from "./config";

const startServer=()=>{
    const app=express();

    app.listen(config.port,()=>{
        console.log("RUNNING")
    })
}

startServer();
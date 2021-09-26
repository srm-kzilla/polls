import { Router } from "express";
import { dataHandler } from "./dataHandling/router";



export default (): Router=>{
   const app=Router()
   console.log("IN ROUTER")
   app.use("/data",dataHandler())

   return app;
}
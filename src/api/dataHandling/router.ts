import { Router ,Request,Response} from "express";
import { requestValidation } from "../../shared/middlewares/validation";
import { addData } from "./controller";
import { dataSchema } from "./schema";

export const dataHandler=(): Router=>{
    const app=Router();
    app.post("/",requestValidation('body',dataSchema),handelData);
    return app;
}


const handelData=async (req: Request,res: Response)=>{
    try{
        console.log(req.body)
        await addData(req.body);
        res.json({status: true,msg: "Data added Successfully"})
    }catch(error)
    {
       res.json({status: false,msg: error.message})
    }
}
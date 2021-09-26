import React,{useState} from 'react'
import {History} from 'history'
import { axiosReq } from '../../utils/api';
import { nanoid } from 'nanoid'



export interface Option{
    count: number,
    value: string,
    id: string
}
interface Props{
    history: History
}

const HomePage=({history}: Props)=>{
    const[question,setQuestion]=useState<string>("");
    const[opt,setOpt]=useState<Option[]>([]);
    const[error,setError]=useState<string>("");


    const handelOptions=(event: any)=>{
        const {name,value}=event.target;
        const temp=opt.map((data : Option)=>{
            if(data.id==name)
            {
                return {...data,value: value}
            }
            return data;
        })
        setOpt(temp)
    }

    const handelDelete=(event: any)=>{
        
       const temp=opt.filter((data: Option)=>{
           if(data.id!=event.currentTarget.name) return data;
       })
       setOpt(temp);
    }

    const validation=()=>{
        if(question.length==0) setError("Enter Valid Question")
        else if(opt.length<2 || opt.length>6) setError("Mi 2 and Max 6 options are Required")
        else{
            var check=false;
            opt.map((data: Option)=>{
                if(data.value.length==0) check=true;
            } )
            if(check) setError('Enter Valid Options')
        }
    }
    const sendData=async (obj: any)=>{
        console.log("HII")
        axiosReq.post("/data/",obj)
        .then((res)=> res)
        .catch((err)=> setError('There is some Error in Saving Your Data,Try Again.'))
    }
    const handelSubmit=async (event: any)=>{
        event.preventDefault(); 
        setError("")
        validation();
        if(error.length==0)
        {
            const adminUnique=nanoid()
            const userUnique=nanoid()
            await sendData({question,opt,adminUnique: adminUnique,userID: userUnique});
           if(error.length==0)
                history.push(`/admin/${adminUnique}`)
        }
    }

    const handelAddOption=()=>{
         setOpt([...opt,{count: 0,value: "",id: nanoid(5)}])
    }
    
    return(
        <div>
           
         <form onSubmit={handelSubmit}>
                {
                    error.length>0 ? <p>{error}</p> : null
                }
                <input value={question} type="text" placeholder="Enter Your Question" onChange={(e)=>setQuestion(e.target.value)}></input>
                <div>
                    {
                       opt.map((option: Option)=>(
                           <div>
                               <input type="text" placeholder="Enter Your Option" value={option.value} name={option.id} key={option.id} onChange={handelOptions}></input>
                               <button type="button" name={option.id} onClick={handelDelete}>Rem</button>
                           </div>
                       ))
                    }
                </div>
                <button type="button" onClick={handelAddOption}> Add Options</button>
                <button type="submit" onSubmit={handelSubmit}>Create Poll</button>
            </form>
        </div>
    )

}


export default HomePage;
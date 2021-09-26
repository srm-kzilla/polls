import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { addData } from '../../store/Data/action';
import {History} from 'history'
import { axiosReq } from '../../utils/api';


export interface optType{
     opt:{
         count: number,
         value: string,
         ID: string
     }[]
}

interface Prop{
    history: History
}

const HomePage=({history}: Prop)=>{
    const[Question,setQuestion]=useState<string>("");
    const[opt,setOpt]=useState<optType['opt']>([]);
    const[error,setError]=useState<string>("");
    const dispatch=useDispatch();

    const generateRandomString = (length=6)=>Math.random().toString(20).substr(2, length) 

    const handelOptions=(event: any)=>{
        const {name,value}=event.target;
        const temp=opt.map((data)=>{
            if(data.ID==name)
            {
                return {...data,value: value}
            }
            return data;
        })
        setOpt(temp)
    }

    const handelDelete=(event: any)=>{
        
       const temp=opt.filter((data)=>{
           if(data.ID!=event.currentTarget.name) return data;
       })
       setOpt(temp);
    }

    const validation=()=>{
        if(Question.length==0) setError("Enter Valid Question")
        else if(opt.length<2 || opt.length>6) setError("Mi 2 and Max 6 options are Required")
        else{
            var check=false;
            opt.map((data)=>{
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
            const adminUnique=generateRandomString()
            const userUnique=generateRandomString()
            await sendData({Question,opt,adminUnique: adminUnique,userID: userUnique});
           // dispatch(addData({Question,opt,adminUnique: adminUnique,userID: userUnique}))
           if(error.length==0)
                history.push(`/admin/${adminUnique}`)
        }
    }

    const handelAddOption=()=>{
         setOpt([...opt,{count: 0,value: "",ID: generateRandomString(5)}])
    }
    
    return(
        <div>
           
         <form onSubmit={handelSubmit}>
                {
                    error.length>0 ? <p>{error}</p> : null
                }
                <input value={Question} type="text" placeholder="Enter Your Question" onChange={(e)=>setQuestion(e.target.value)}></input>
                <div>
                    {
                       opt.map((option)=>(
                           <div>
                               <input type="text" placeholder="Enter Your Option" value={option.value} name={option.ID} key={option.ID} onChange={handelOptions}></input>
                               <button type="button" name={option.ID} onClick={handelDelete}>Rem</button>
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
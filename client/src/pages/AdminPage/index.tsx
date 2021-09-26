import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import io from 'socket.io-client'
import { Option } from '../HompePage'

let Socket;
const AdminPage=()=>{
    
   // const{id}: string=useParams();
    const[Question] =useState<string>("");
    const[opt,setOpt]=useState<Option[]>([]);
    const[userUnique,setUser]=useState<string>("");
    useEffect(()=>{
        Socket=io('http://localhost:5000/')
    })
    return(
        <div>
            <h1>Heyy</h1>
        </div>
    )
}

export default AdminPage;
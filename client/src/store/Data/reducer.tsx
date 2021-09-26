import { act } from "react-dom/test-utils";
import { DataType } from "./action";


const dataReducer=(state={},action : {type: string,payload : DataType})=>{
    switch(action.type)
    {
        case 'ADD_DATA':
            return{
            ...action.payload
            }
        default:
            return state
    }
}

export default dataReducer;
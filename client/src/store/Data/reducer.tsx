import { act } from "react-dom/test-utils";
import { dataType } from "./action";


const dataReducer=(state={},action : {type: string,payload : dataType})=>{
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
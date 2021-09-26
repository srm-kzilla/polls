import axios,{AxiosInstance} from 'axios';

export const axiosReq: AxiosInstance= axios.create({
    baseURL: "http://localhost:5000/"
});




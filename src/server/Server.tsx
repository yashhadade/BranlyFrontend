import axios  from "axios";

export const server=axios.create({
    baseURL:"http://localhost:3000/api/v1",
    responseType:"json",
    headers:{
        "Authorization":`Bearer ${localStorage.getItem('token')}`
    }
})
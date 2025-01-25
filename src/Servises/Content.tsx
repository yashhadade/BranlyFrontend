import { server } from "../server/Server";

const getContentInfo=(data:any)=>{
    return server.post('/content',data)
    .then(res=>{
        return res.data;
    })
    .catch(err=>{
        return err.response.data
    })
}

const contetnServise={
    getContentInfo
}
export default contetnServise
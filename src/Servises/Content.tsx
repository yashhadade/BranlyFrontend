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
const getAllContent=()=>{
    return server.get("/getContent")
    .then(res=>{
        return res.data
    })
    .catch(err=>{
        return err.response.data;
    })
}

const contetnServise={
    getContentInfo,
    getAllContent
}
export default contetnServise
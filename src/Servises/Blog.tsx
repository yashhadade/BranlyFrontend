import { server } from "../server/Server";

const getAllBlog=()=>{
    return server.get("/getAllBlog")
    .then(res=>{
        return res.data
    })
    .catch(err=>{
        return err.response.data;
    })
}

const blogService={
    getAllBlog,
}
export default blogService
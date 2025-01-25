
import { server } from "../server/Server"

const getSignUp=(data:any)=>{
    return server.post('/signUp',data)
    .then(res=>{
        return res.data;
    })
    .catch(err=>{
        return err.response.data
    })
}

const getSignIn=(data:any)=>{
    return server.post('/signIn',data)
    .then(res=>{
        return res.data;
    })
    .catch(err=>{
        return err.response.data
    })
}

const userServise={
    getSignIn,
    getSignUp,

}
export default userServise;
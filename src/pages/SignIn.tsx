import { Button } from "../Components/Button"
import { Input } from "../Components/Input"


export const SignIn=()=>{
    return(<div className=" h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className=" bg-white rounded-md border min-w-48 flex flex-col items-center p-8 ">
            <div className=" text-2xl">Sign In</div>
                <Input placeholder={"userName"} type={"text"}/>
                <Input placeholder={"Password"} type={"password"}/>
                <div className=" pt-4">
                <Button variant={"primary"} size={"lg"} fullWidth={true} text="Log In"/>
                </div>
        </div>
    </div>)
}
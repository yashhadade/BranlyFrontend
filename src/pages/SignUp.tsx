import { useRef } from "react"
import { Button } from "../Components/Button"
import { Input } from "../Components/Input"


export const SignUp=()=>{
   
function SignUp(){

}
    return(<div className=" h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className=" bg-white rounded-md border min-w-48 flex flex-col items-center p-8 ">
            <div>Create Account</div>
                <Input placeholder={"userName"} type={"text"}/>
                <Input placeholder={"Password"} type={"password"}/>
                <div className=" pt-4">
                <Button onClick={SignUp} variant={"primary"} size={"lg"} fullWidth={true} text="Create Account"/>
                </div>
        </div>
    </div>)
}
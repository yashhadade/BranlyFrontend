import { useFormik } from "formik";
import { Button } from "../Components/Button";
import { Input } from "../Components/Input";
import { userSignInSingUp } from "../Validation/Validation";
import { useState } from "react";
import userServise from "../Servises/UserAccount";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

const initialValues = {
    username: "",
    password: "",
};

export const SignUp = () => {
    const navigate=useNavigate()
    const {enqueueSnackbar}=useSnackbar();
    const [loading, setLoading] = useState(false);
    const userInformaton=async(value)=>{
        try {
            const res = await userServise.getSignUp(value)
            if(res && res.sucess){
                enqueueSnackbar("User Created SucessFully",{
                    variant:"success",
                    anchorOrigin:{horizontal:"right",vertical:"top"},
                    autoHideDuration:1000,
            })
            navigate("/")
            }else{
                const errorMessage=res.message||res.data||"An unknown error occurred"
                enqueueSnackbar(errorMessage, {
                    variant: "error",
                    anchorOrigin: { horizontal: "right", vertical: "top" },
                    autoHideDuration: 5000,
                  });
            }
        } catch (error) {
            enqueueSnackbar(error.message || "Error", {
                variant: "error",
                anchorOrigin: { horizontal: "right", vertical: "top" },
                autoHideDuration: 800,
              });
        }
        
    }
    

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: userSignInSingUp,
        onSubmit: async (values) => {
            // setUserDetail(values);
            setLoading(true)
           userInformaton(values)
           setLoading(false)
        },
    });

    return (
        <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
            <div className="bg-white rounded-md border min-w-48 flex flex-col items-center p-8">
                <div className="text-2xl">Sign Up </div>
                <Input
                    placeholder={"Username"}
                    type={"text"}
                    name={"username"}
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {errors.username && touched.username && <div className="text-left text-red-600">{errors.username}</div>}
                
                <Input
                    placeholder={"Password"}
                    type={"password"}
                    name={"password"}
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {errors.password && touched.password && <div className="text-left text-red-600">{errors.password}</div>}

                <div className="pt-4">
                    <Button variant={"primary"} size={"lg"} fullWidth={true} onClick={handleSubmit} loadding={loading}text="Create Account" />
                </div>
            </div>
        </div>
    );
};

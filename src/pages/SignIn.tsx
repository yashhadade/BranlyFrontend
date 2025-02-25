import { useFormik } from "formik";
import { Button } from "../Components/Button";
import { Input } from "../Components/Input";
import { userSignInSingUp } from "../Validation/Validation";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import userServise from "../Servises/UserAccount";

const initialValues = {
    username: "",
    password: "",
};

export const SignIn = () => {

    // const [userDetail, setUserDetail] = useState();
    const navigate = useNavigate()
    const { enqueueSnackbar } = useSnackbar();
    const [loading, setLoading] = useState(false);
    const userInformatonForLogin = async (value) => {
        try {
            const res = await userServise.getSignIn(value)

            if (res && res.success) {
                enqueueSnackbar("Login SucessFully", {
                    variant: "success",
                    anchorOrigin: { horizontal: "right", vertical: "top" },
                    autoHideDuration: 1000,
                })
                const token = res.token;
                sessionStorage.setItem('token', token);
                navigate("/card")
            } else {
                const errorMessage = res.message || res.data || "An unknown error occurred"
                enqueueSnackbar(errorMessage, {
                    variant: "error",
                    anchorOrigin: { horizontal: "right", vertical: "top" },
                    autoHideDuration: 5000,
                });
            }
        } catch (error: any) {
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
            setLoading(true)
            await userInformatonForLogin(values);
            setLoading(false)
            console.log(values);
        },
    });

    return (
        <>
            <div className="h-screen w-screen bg-gray-200 flex flex-col">
                <div className=" flex justify-end m-3">
                    <Button variant={"secondary"} size={"md"} onClick={() => navigate("/signUp")} text="New Account" />
                </div>
                <div className="h-screen w-screen flex justify-center items-center">
                    <div className="bg-white rounded-md border min-w-48 flex flex-col items-center p-8">
                        <div className="text-2xl">Sign In</div>
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

                        <div className="pt-4 flex flex-col justify-center items-center">
                            <Button variant={"primary"} size={"lg"} fullWidth={true} onClick={handleSubmit} loadding={loading} text="Log In" />
                            <p className="text-sm text-sky-900 hover:underline cursor-pointer" onClick={()=>navigate("/signUp")}>SignUp</p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

import * as Yup from "yup"

export const userSignInSingUp=Yup.object({
    username:Yup.string()
    .required("Please Enter User Name"),

    password:Yup.string()
    .required("Please Enter the Password")

})
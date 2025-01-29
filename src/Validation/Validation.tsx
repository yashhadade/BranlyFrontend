import * as Yup from "yup"

export const userSignInSingUp=Yup.object({
    username:Yup.string()
    .required("Please Enter User Name"),

    password:Yup.string()
    .required("Please Enter the Password")

})
export const  content=Yup.object({
    title:Yup.string()
    .required("Please enter Title"),
    link:Yup.string()
    .required("Please enter link"),
    // type:Yup.string()
    // .required("Please Select Type")
})
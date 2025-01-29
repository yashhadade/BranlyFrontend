import { useFormik } from "formik";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import { content } from "../Validation/Validation";
import { useSnackbar } from "notistack";
import { useState } from "react";
import contetnServise from "../Servises/Content";

const initialValues = {
  link: "",
  title: "",
  // type:""
}
// CreateContentModel.js
export const CreateContentModel = ({ open, onClosed }) => {
  const {enqueueSnackbar}=useSnackbar();
  const [loading, setLoading] = useState(false);
  const constentInfo=async(value)=>{
      try {
          const res = await contetnServise.getContentInfo(value)
         
          if(res && res.success){
              enqueueSnackbar("Login SucessFully",{
                  variant:"success",
                  anchorOrigin:{horizontal:"right",vertical:"top"},
                  autoHideDuration:1000,
          })
          }else{
              const errorMessage=res.message||res.data||"An unknown error occurred"
              enqueueSnackbar(errorMessage, {
                  variant: "error",
                  anchorOrigin: { horizontal: "right", vertical: "top" },
                  autoHideDuration: 5000,
                });
          }
      } catch (error:any) {
          enqueueSnackbar(error.message || "Error", {
              variant: "error",
              anchorOrigin: { horizontal: "right", vertical: "top" },
              autoHideDuration: 800,
            });
      }
      
  }
  const { values, errors, touched, handleBlur, handleChange, handleSubmit, resetForm } = useFormik({
    initialValues,
    validationSchema: content,
    onSubmit: async (values) => {
      setLoading(true)
      constentInfo(values)
      // setLoading(true)
      // await userInformatonForLogin(values);
      // setLoading(false)
      console.log(values);
      resetForm()
    },
  });

  return (
    <>
      {open && (
        <div
          className="fixed w-screen h-screen bg-slate-400  top-0 left-0 opacity-80 flex justify-center items-center"
          onClick={onClosed}
        >
          <div className="bg-white p-6 rounded-lg shadow-md w-1/3 z-10" onClick={(e) => e.stopPropagation()}>
            <div className=" flex justify-end">
              <CrossIcon size="md" onClick={onClosed} />
            </div>
            <div className=" flex flex-col justify-center">
              <Input placeholder={"Title"} value={values.title} type={"text"} onChange={handleChange} onBlur={handleBlur} name={"title"} />
              {errors.title && touched.title && <div className="text-left text-red-600">{errors.title}</div>}
              <Input placeholder={"Link"} value={values.link} type={"text"} onChange={handleChange} onBlur={handleBlur} name={"link"} />
              {errors.link && touched.link && <div className="text-left text-red-600">{errors.link}</div>}
              {/* <div className=" mt-1 ">
              <select name="type" onChange={handleChange} onBlur={handleBlur} className=" border p-4 rounded">
                
              <option value="">Please Select Type</option>
                <option value="youtube">Youtube</option>
                <option value="twitter">Twitter</option>
              </select>
              </div> */}
            </div>
            <div className=" flex justify-center mt-1">
              <Button variant={"primary"} text={"Submit"} size={"md"} onClick={handleSubmit} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};


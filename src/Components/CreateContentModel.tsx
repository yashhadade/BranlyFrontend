import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";

// CreateContentModel.js
export const CreateContentModel = ({ open, onClosed }) => {
    return (
      <>
        {open && (
          <div
            className="fixed w-screen h-screen bg-slate-400  top-0 left-0 opacity-80 flex justify-center items-center"
            onClick={onClosed} 
          >
            <div className="bg-white p-6 rounded-lg shadow-md w-1/3 opacity-100" onClick={(e) => e.stopPropagation()}>
              <div className=" flex justify-end">
                <CrossIcon size="md" onClick={onClosed}/>
              </div>
              <Input placeholder={"Title"}/>
              <Input placeholder={"Link"}/>
              <div className=" flex justify-center">
              <Button variant={"primary"} text={"Submit"} size={"md"}/>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };
  
  interface InputInterface{
    placeholder:string,
    onChange:()=>void,
  }
  function Input(props:InputInterface){
    return<div>
        <input placeholder={props.placeholder}type={"text"} className=" px-4 py-2 border rounded-md m-2" onChange={props.onChange}></input>
    </div>
  }
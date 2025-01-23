import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";

// CreateContentModel.js
export const CreateContentModel = ({ open, onClosed }) => {
    return (
      <>
        {open && (
          <div
            className="fixed w-screen h-screen bg-slate-400  top-0 left-0 opacity-80 flex justify-center items-center"
            onClick={onClosed} 
          >
            <div className="bg-white p-6 rounded-lg shadow-md w-1/3 z-10" onClick={(e) => e.stopPropagation()}>
              <div className=" flex justify-end">
                <CrossIcon size="md" onClick={onClosed}/>
              </div>
              <Input placeholder={"Title"} type={"text"}/>
              <Input placeholder={"Link"} type={"text"}/>
              <div className=" flex justify-center">
              <Button variant={"primary"} text={"Submit"} size={"md"}/>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };
  
  
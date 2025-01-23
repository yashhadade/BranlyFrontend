export interface InputInterface{
    placeholder:string,
    onChange:()=>void,
    type:"text"|"number"|"email"|"password"
  }
  export function Input(props:InputInterface){
    return<div>
        <input placeholder={props.placeholder}type={props.type} className=" px-4 py-2 border rounded-md m-2" onChange={props.onChange}></input>
    </div>
  }
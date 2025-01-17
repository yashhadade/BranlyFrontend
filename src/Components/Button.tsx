export interface ButtonProps{
   variant :"primary"| "Secondry";
   size:"sm"|"md"|"lg";
   text:string;
   startIcon?:any;
   endIcon?:any;
   onClick:()=>void;
}

export const Button=(props:ButtonProps)=>{
    return <button></button>
}

<Button endIcon={"+"} variant="primary" text="ssd" size="md" onClick={()=>{}} startIcon={"-"}/>

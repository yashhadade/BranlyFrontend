import { ReactElement } from "react"

interface sidebarInterface{
    icon :ReactElement,
    title:string,
}
export const SideItem=(props:sidebarInterface)=>{
return <div className=" flex items-center cursor-pointer">
    <div className="p-2">{props.icon}</div>
    <div>{props.title}</div>
</div>
}
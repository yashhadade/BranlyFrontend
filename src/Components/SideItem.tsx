import { ReactElement } from "react"

interface sidebarInterface{
    icon :ReactElement,
    title:string,
}
export const SideItem=(props:sidebarInterface)=>{
return <div className=" flex items-center cursor-pointer text-gray-600 py-2 hover:bg-gray-200 rounded max-w-48 p-4 transition-all duration-700 mt-2">
    <div className="pr-2 ">{props.icon}</div>
    <div >{props.title}</div>
</div>
}
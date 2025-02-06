import { BrainIcon } from "../icons/BrainIcon"
import { Twitter } from "../icons/Twitter"
// import { Youtube } from "../icons/Youtube"
import { SideItem } from "./SideItem"


export const Sidebar=({onSelect}:{onSelect:(item:string)=>void})=>{
    return(
    <div className=" h-screen border-r-2 bg-white w-64 left-0 top-0 absolute fixed border-slate-300 pl-6">
        <div className=" text-2xl pt-4 flex items-center pt-8 ">
            <div className=" text-purple-600 "><BrainIcon size={"lg"}/></div><div className=" pl-2
        ">Branly</div></div>
        <div className=" pt-8 pl-4">
        <SideItem icon={<Twitter size={"lg"}/>} title="Card" onClick={() => onSelect('card')}/>
        <SideItem icon={<Twitter size={"lg"}/>} title="Todo" onClick={() => onSelect('todo')}/>
        {/* <SideItem icon={<Youtube size={"lg"}/>} title="Youtube"/> </div> */}
    </div>
    </div>
    )
}
import { Twitter } from "../icons/Twitter"
import { SideItem } from "./SideItem"


export const Sidebar=()=>{
    return<div className=" h-screen border-r-2 bg-white w-76 left-0 top-0 absolute fixed border-slate-300">
        <div className=" text-xl t">Branly</div>
        <SideItem icon={<Twitter size={"lg"}/>} title="Twiiter"/>
    </div>
}
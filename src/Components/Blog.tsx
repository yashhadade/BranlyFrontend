export interface BlogInterface{
    title:string;
    time:string;
    description:string;
}

export function Blog({title,time,description}:BlogInterface){
    return <>
    <div className=" flex flex-col justify-center w-[100%] items-center">
    <div className=" w-[60%] bg-white rounded-lg p-4">
        <div className=" flex justify-between">
            <p className="  text-lg font-bold">
                    {title}
            </p>
            
            </div>
        
        <div>{description}</div>
        <div className=" flex justify-end">
        <p className=" text-lime-500">
                    {time}
            </p>
        </div>
    </div>
    </div>
    </>
}
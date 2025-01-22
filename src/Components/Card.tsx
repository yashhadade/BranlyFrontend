import { ShareIcon } from "../icons/ShareIcon"

export interface CardInterface {
    title: string;
    link: string;
    type: "twitter" | "youtube";
}

export const Card = ({ title, link, type }: CardInterface) => {
    return (<div>
        <div className=" p-4 bg-white rounded-md  border-gray-200 max-w-72 border min-h-80  object-contain">
            <div className=" flex justify-between">
                <div className="flex items-center text-md">
                    <div className=" pr-2 text-gray-500"><ShareIcon size="md" /></div>
                    {title}
                </div>
                <div className=" flex items-center">
                    <div className=" pr-2 text-gray-500"
                    > <a href={link} target="_blank"><ShareIcon size="md" /></a></div>

                    <div className="  text-gray-500"><ShareIcon size="md" /></div>
                </div>
            </div>
            <div className=" pt-8">
                {type === "youtube" && (
                    <iframe
                        className="w-[100%]"
                        src={link.replace("watch","embed").replace("?v=","/")}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                )}


                {type === "twitter" && <blockquote className="twitter-tweet">
                    <a href={link.replace("x.com","twitter.com")}></a>
                </blockquote>}
            </div>
        </div>
    </div>)
}
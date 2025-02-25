import { useEffect, useState } from "react";
import contetnServise from "../Servises/Content";
import { Card } from "../Components/Card";

export function CardView(){
     const [content, setContent] = useState<any[]>([])
    const getContent = async () => {
        try {
          const res = await contetnServise.getAllContent();
          if (res && res.success) {
            setContent(res.allContent)
          }
          else {
            console.error(
              "Error fetching seller information",
              res.message || "Unknown error"
            );
          }
        } catch (error) {
          console.error("Failed to fetch seller information:", error);
        }
      }
      useEffect(() => {
        getContent()
      }, [])
    return<>
    {content?.map((data, _id) => {
                  return (
                    <Card
                      key={_id}
                      title={data.title}
                      link={data.link}
                      type={data.type}
                      notes={data?.notes}
                    />
                  );
                })
            }
    </>
}
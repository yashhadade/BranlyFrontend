import { useEffect, useState } from "react";
import { Blog } from "../Components/Blog";
import blogService from "../Servises/Blog";
import moment from "moment";

export function AllBlog() {
  const [blog, setBlog] = useState<any[]>([]);

  const getBlog = async () => {
    try {
      const res = await blogService.getAllBlog();
      if (res && res.success) {
        setBlog(res.data);
      } else {
        console.error("Error fetching blog information", res.message || "Unknown error");
      }
    } catch (error) {
      console.error("Failed to fetch Blog information:", error);
    }
  };

  useEffect(() => {
    getBlog();
  }, []);

  return (
    <>
    <div className=" flex flex-col gap-2 justify-center items-center w-[100%]">
      {blog.map((data, _id) => {
        return (
        
          <Blog
            key={_id} // You need to provide a unique key for each element in a list
            title={data.title}
            time={moment(data.createdAt).format("DD/MM/yy hh:MM a")}
            description={data.blog}
          />
        );
      })}
      </div>
    </>
  );
}

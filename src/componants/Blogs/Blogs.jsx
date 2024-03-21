import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import BlogCard from "./BlogCard";



const Blogs = () => {
    const blogs = useLoaderData();



    useEffect(() => {

    }, [])
    return (
        <div className="">
            <div className="space-y-2 mt-10 text-center">
                <h2 className="text-3xl font-bold">This is top blogs in last week</h2>
                <p className="font-serif text-xl font-semibold">This is authentic site foe blogs. and we provide blogs for our viewers. <br /> <strong className="font-bold"> ❤️Thanks For Visiting❤️ </strong></p>
            </div>

            <div className="grid grid-cols-3">
                {
                    blogs.map(blog => <BlogCard key={blog.id} blog={blog}></BlogCard>)
                }
            </div>
        </div>
    );
};

export default Blogs;








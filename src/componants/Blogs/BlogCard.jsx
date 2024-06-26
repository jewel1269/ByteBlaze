import { NavLink } from "react-router-dom";

const BlogCard = ({blog}) => {
    const {title, cover_image, published_at,description, id } = blog;
    return (
        <NavLink to={`/blog/${id}`} className="py-6 sm:py-12  ">
        <div className="container   p-5 mx-auto space-y-8">
           
            <div className="grid border rounded-2xl shadow-2xl  grid-cols-1 h-[520px] p-3">
                <article className="flex flex-col p-3 ">
                    <a>
                    <img alt="" className="object-cover w-full h-52" src={cover_image} />

                    </a>
                    <div className="flex flex-col flex-1 p-6">
                        <a rel="noopener noreferrer" href="id" aria-label="Te nulla oportere reprimique his dolorum"></a>
                        <a rel="noopener noreferrer" href="id" className="text-xl tracking-wider uppercase hover:underline font-bold text-violet-500">{title}</a>
                        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs ">
                            <span>{published_at}</span>
                          
                        </div>
                        <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{description}</h3>
                    </div>
                </article>
            </div>
        </div>
    </NavLink>
    );
};

export default BlogCard;
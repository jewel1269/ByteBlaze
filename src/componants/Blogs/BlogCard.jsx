const BlogCard = ({blog}) => {
    const {title, cover_image, published_at,description } = blog;
    return (
        <section className="py-6 sm:py-12  ">
        <div className="container  p-5 mx-auto space-y-8">
           
            <div className="grid border rounded-2xl shadow-2xl   grid-cols-1 h-[420px] p-3">
                <article className="flex flex-col p-3 ">
                    <a>
                    <img alt="" className="object-cover w-full h-52" src={cover_image ? cover_image : '../Layout/1695037399954-01.jpeg'} />

                    </a>
                    <div className="flex flex-col flex-1 p-6">
                        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                        <a rel="noopener noreferrer" href="./blog" className="text-xl tracking-wider uppercase hover:underline font-bold text-violet-500">{title}</a>
                        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs ">
                            <span>{published_at}</span>
                          
                        </div>
                        <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{description}</h3>
                    </div>
                </article>

            </div>
        </div>
    </section>
    );
};

export default BlogCard;
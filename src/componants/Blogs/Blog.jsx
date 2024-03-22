import { useState } from "react";
import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'


const Blog = () => {
	const [tabIndex, setTabIndex] = useState(0)
	const blog = useLoaderData();
	const { title, cover_image,
		published_at, description,
		id, comments_count,
		public_reactions_count,
		reading_time_minutes,
		tags, body_html } = blog;

	return (
		<div style={{ overflowY: "auto", maxHeight: "calc(100vh - 116px)" }} className="w-full  px-6 py-16 mx-auto space-y-12">
			<article className="space-y-8 ml-44 ">
				<div className="space-y-6">
					<h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">{title}</h1>
					<div className="flex flex-col items-start gap-72 w-full md:flex-row md:items-center ">
						<div className="flex items-center md:space-x-2">

							<p className="text-xl">{reading_time_minutes} Read min • {published_at}</p>
						</div>
						<p className="flex-shrink-0 mt-3 text-xl md:mt-0">{comments_count} Comment• {public_reactions_count} Views </p>
					</div>
					<div className="flex justify-start  overflow-x-auto overflow-y-hidden  flex-nowrap ">
						<NavLink
							to=''
							onClick={() => setTabIndex(0)}
							rel="noopener noreferrer" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0' : 'border-b'} rounded-t-lg border-gray-400`}>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
								<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
							</svg>
							<span>Content</span>
						</NavLink>
						<NavLink
							to={"/author"}
							onClick={() => setTabIndex(1)}
							rel="noopener noreferrer" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0' : 'border-b'} rounded-t-lg border-gray-400`}>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
								<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
								<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
							</svg>
							<span>Author</span>
						</NavLink>

					</div>
				</div>
				<div className="text-xl">
					<p>{description}</p>
				</div>
				<Outlet></Outlet>
			</article>
			<div className="ml-44  border mr-96 p-5">
				<img src={cover_image} alt="" />
				<div className="flex flex-wrap py-6 gap-2 border-gray-400">
					{
						tags.map(tag => (
							<a rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline  text-gray-900">#{tag}</a>
						))
					}
				</div>


				<div className="mr-44">
					<h1 className="text-2xl font-bold">{title}</h1>
					<Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
				</div>


			</div>
		</div>
	);
};

export default Blog;

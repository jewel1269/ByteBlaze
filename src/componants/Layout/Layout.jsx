import { NavLink } from "react-router-dom";



const Layout = () => {
    return (

        <div>

            <div>
                <div className="hero  mt-24 h-[500px]   relative bottom-10 ">
                    <div className="hero-content text-center">
                        <div className="max-w-lg">
                            <h1 className="text-5xl gap-0 font-bold ">Welcome to <span className="bg-gradient-to-r from-primary via-blue-500 to-secondary bg-300% text-transparent bg-clip-text animate-gradient"> ByteBlaze</span></h1>
                            <p className="py-4">ByteBlaze is the bridge between the complex world of technology and the curious minds eager to understand it</p>
                            <div className="flex justify-center gap-2">
                                <div>
                                    <NavLink to={'/blogs'} className="relative inline-block text-lg group">
                                        <span className="relative z-10 block px-4 py-2 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-pink-600  group-hover:text-white">
                                            <span className="absolute inset-0 w-full h-full px-4 py-2  bg-gray-50"></span>
                                            <span className="absolute left-0 w-40 h-40 -ml-2 transition-all duration-300 origin-top-right  -translate-x-full translate-y-10 bg-blue-600 group-hover:-rotate-180 ease"></span>
                                            <span className="relative ">Read Blogs</span>
                                        </span>
                                        <span className="absolute bottom-0 right-0 w-full h-10 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-blue-600  group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-md"></span>
                                    </NavLink>

                                </div>
                                <div>
                                    <NavLink to={'/bookmarks'} className="relative inline-block text-lg group">
                                        <span className="relative z-10 block px-4 py-2 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-pink-600  group-hover:text-white">
                                            <span className="absolute inset-0 w-full h-full px-4 py-2  bg-gray-50"></span>
                                            <span className="absolute left-0 w-40 h-40 -ml-2 transition-all duration-300 origin-top-right  -translate-x-full translate-y-10 bg-blue-600 group-hover:-rotate-180 ease"></span>
                                            <span className="relative ">Bookmarks</span>
                                        </span>
                                        <span className="absolute bottom-0 right-0 w-full h-10 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-blue-600  group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-md"></span>
                                    </NavLink>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[url('/Wave-10s-1920px.png')] bg-cover bg-center h-60 bottom-5 -rotate-180">
            </div>


        </div>
    );
};

export default Layout;
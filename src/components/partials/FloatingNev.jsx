import React from "react";
import { Link } from "react-router-dom";

const FloatingNev = ({ setFloatingNev }) => {
  return (
    <div className="absolute top-0 h-[65vh] w-screen bg-[rgba(32,31,31,0.99)] text-zinc-500 z-50 rounded-b-xl p-4">
      <i
        onClick={() => setFloatingNev((floatingNev) => !floatingNev)}
        className=" font-extrabold ri-close-line text-2xl "
      ></i>

      {/*feed */}
      <div className="flex flex-col w-full items-center h-full">
        <div className="flex flex-col w-full justify-evenly">
          {/* <h1 className=" font-bold text-xl">
            New Feed
          </h1> */}
          <nav className="flex flex-col">
            <Link
              to="/trending"
              className=" font-serif text-3xl font-bold rounded flex items-center justify-center h-20 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 capitalize hover:cursor-pointer hover:bg-purple-600"
            >
              <i className="ri-fire-fill mr-1"></i> trending    
            </Link>
            <Link
              to="/popular"
              className=" font-serif text-3xl font-bold rounded flex items-center justify-center h-20 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 capitalize hover:cursor-pointer hover:bg-purple-600 "
            >
              <i className="ri-sparkling-2-fill mr-1"></i> popular
            </Link>
            <Link
              to="/movie"
              className="  font-serif text-3xl font-bold rounded flex items-center justify-center h-20 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 capitalize hover:cursor-pointer hover:bg-purple-600"
            >
              <i className="ri-movie-2-fill mr-1"></i> movies
            </Link>
            <Link
              to="/tv"
              className="  font-serif text-3xl font-bold rounded flex items-center justify-center h-20 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 capitalize hover:cursor-pointer hover:bg-purple-600"
            >
              <i className="ri-tv-2-fill mr-1"></i> tv shows
            </Link>
            <Link
              to="/person"
              className="  font-serif text-3xl font-bold rounded flex items-center justify-center h-20 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 capitalize hover:cursor-pointer hover:bg-purple-600"
            >
              <i className="ri-group-fill mr-1"></i> people
            </Link>
          </nav>
        </div>

        {/* <div className="w-full h-[1px] bg-zinc-400"></div> */}

        {/* <div className="flex flex-col gap-6">
          <h1 className=" font-bold text-xl capitalize max-lg:text-md max-md:text-sm">Information</h1>
          <nav className="flex flex-col gap-4">
            <Link className=" transition ease-in-out max-lg:px-2 max-md:text-xs delay-50 hover:-translate-y-1 hover:scale-110 duration-300 capitalize hover:cursor-pointer hover:bg-purple-600 h-10 rounded flex px-5 items-center">
              <i className="ri-information-fill mr-1"></i> about
            </Link>
            <Link className=" transition ease-in-out max-lg:px-2 max-md:text-xs  delay-50 hover:-translate-y-1 hover:scale-110 duration-300 capitalize hover:cursor-pointer hover:bg-purple-600 h-10 rounded flex px-5 items-center">
              <i className=" mr-1 ri-customer-service-2-fill"></i> contact
            </Link>
          </nav>
        </div> */}
      </div>
    </div>
  );
};

export default FloatingNev;

import React from "react";
import profileBlankImage from "../../../public/image-not-found.jpg";

const MainCards = ({ data }) => {
  return (
    <div className="w-64 rounded h-[60vh] max-lg:w-52  max-lg:h-[50vh] max-md:w-44 max-sm:w-24 max-sm:h-[24vh] max-md:h-[45vh] max-md:px-0  max-md:py-0 py-2 px-3 overflow-hidden border-[1px] border-zinc-700">
      <div className="w-full h-[80%] relative">
        <img
          className="w-full h-full object-contain rounded"
          src={
            data.poster_path || data.backdrop_path || data.profile_path
              ? `https://image.tmdb.org/t/p/original/${
                  data.poster_path || data.backdrop_path || data.profile_path
                }`
              : profileBlankImage
          }
          alt=""
        />
        {/* <div  className="star-12 max-sm:hidden flex items-center justify-center font-bold text-sm absolute left-1 top-1  right-0">
          <h1 className=" z-10 -rotate-90">{data.vote_average?(data.vote_average*10).toFixed():(data.popularity).toFixed()} <span>%</span></h1>
        </div> */}
        { data.vote_average&&
        <div className=" absolute w-10 h-10 bg-yellow-500 rounded-full  flex items-center justify-center max-sm:h-8 max-sm:w-8 max-sm:text-xs max-sm:font-thin max-sm:right-0 -bottom-3 -right-0 ">
          <h1 className="text-zinc-700 font-extrabold">
            {(data.vote_average * 10).toFixed()}
            <sup className="text-[10px] max-sm:text-[8px]">%</sup>
          </h1>
        </div>
}
      </div>
      <h1 className=" capitalize font-bold text-2xl text-zinc-500 px-2 py-4 max-lg:text-xl max-md:text-sm max-sm:text-xs">
        {(data.original_title || data.title || data.original_name).substring(
          0,
          24
        )}
      </h1>
    </div>
  );
};

export default MainCards;

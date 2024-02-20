import React from "react";
import profileBlankImage from "../../../public/image-not-found.jpg";

const Cards = ({ item }) => {
  return (
    <div className="relative w-36 h-48 bg-zinc-800 rounded-sm flex flex-col gap-2 p-1 justify-between">
      <div className=" w-full h-full">
        <img
          className="w-full h-full object-fill"
          src={item.poster_path || item.profile_path || item.backdrop_path ||item.file_path ? `https://image.tmdb.org/t/p/original/${
            item.poster_path || item.profile_path || item.backdrop_path || item.file_path
          }`:profileBlankImage
        }
          alt=""
        />
      </div>

      <div className=" absolute w-10 h-10 bg-zinc-800 rounded-full  flex items-center justify-center -bottom-1 -right-3 ">
        <h1 className="text-zinc-300 font-extrabold">{(item.vote_average*10).toFixed()}<sup>%</sup></h1>
      </div>
    </div>
  );
};

export default Cards;

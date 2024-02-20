import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Error from "./Error";

const Trailer = () => {
  const { pathname } = useLocation();
  const catrgory = pathname.includes("movie") ? "movie" : "tv";
  const yt = useSelector((state) => state[catrgory].info.videos);
  const nevigate = useNavigate();
  return yt ? (
    <div className="w-full z-40 h-screen fixed top-0 bg-[rgba(0,0,0,0.81)] flex items-center justify-center">
      <ReactPlayer
        height={500}
        width={800}
        url={`https://www.youtube.com/watch?v=${yt.key}`}
      />

      <Link
        onClick={() => nevigate(-1)}
        className="absolute z-50 top-12 right-72 text-2xl ri-close-fill text-white hover:text-purple-400"
      ></Link>
    </div>
  ) : (
    <div className="w-full z-40 h-screen fixed top-0 bg-[rgba(0,0,0,0.81)] flex items-center justify-center">
    <Error/>
    </div>
  );
};

export default Trailer;

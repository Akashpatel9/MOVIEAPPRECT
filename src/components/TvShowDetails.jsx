import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncLoadTv, removeTv } from "../stores/actions/TvActions";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { PacmanLoader } from "react-spinners";
import Cards from "./partials/Cards";
import ReactPlayer from "react-player";

const TvShowDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { info } = useSelector((item) => item.tv);
  const nevigate = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {
    dispatch(asyncLoadTv(id));
    return () => {
      dispatch(removeTv());
    };
  }, [id]);

  return info ? (
    <div className=" relative w-full bg-[#18181B]">
      <div className="h-[70vh] w-full relative">
        <nav className="absolute z-20 flex gap-10 text-zinc-100 capitalize items-center font-semibold justify-center px-6  mt-3">
          <Link
            onClick={() => nevigate(-1)}
            className=" text-xl ri-arrow-left-s-line hover:text-purple-400"
          ></Link>
          <div className="flex justify-center gap-6 items-center">
            <Link
              target="_blank"
              to={info.detail.homepage}
              className="hover:text-purple-400 ri-external-link-fill"
            ></Link>
            <Link
              target="_blank"
              to={`https://www.imdb.com/title/${info.externalId.imdb_id}`}
              className="hover:text-purple-400"
            >
              imdb
            </Link>
            <Link
              target="_blank"
              to={`https://www.wikidata.org/wiki/${info.externalId.wikidata_id}`}
              className="hover:text-purple-400"
            >
              wiki
            </Link>
          </div>
        </nav>
        <img
          className="w-full h-full object-cover object-top "
          src={`https://image.tmdb.org/t/p/original/${info.detail.backdrop_path}`}
          alt=""
        />
        <div className=" absolute z-10 text-white bottom-20 left-20 flex flex-col gap-5 max-md:left-10 max-sm:left-5">
          <h1 className="font-extrabold w-2/3 text-6xl max-sm:text-4xl">
            {info.detail.name || info.detail.original_name}
          </h1>
          <div className="flex item-center item-center gap-3 max-sm:text-xs max-sm:flex-wrap">
            <h5>{info.detail.status}</h5>
            <h5 className="flex items-center justify-center gap-1">
              <div className="h-1 w-1 rounded-full bg-white"></div>
              {info.detail.first_air_date}
            </h5>
            {info.detail.genres.map((item, idx) => {
              return (
                <h5
                  key={idx}
                  className=" flex items-center justify-center gap-1"
                >
                  <div className=" uppercase h-1 w-1 rounded-full bg-white"></div>
                  <div>{item.name}</div>
                </h5>
              );
            })}
          </div>

          <div className="flex items-center justify-center w-fit gap-2 font-bold text-xl capitalize">
            <div className="w-12 h-12 p-5 bg-purple-500 rounded-full  flex items-center justify-center max-sm:w-10 max-sm:h-10">
              <h1 className="text-white font-bold max-sm:text-sm">
                {(info.detail.vote_average * 10).toFixed()}
                <sup>%</sup>
              </h1>
            </div>
            <h1 className="max-sm:text-sm capitalize font-semibold">
              user score
            </h1>
          </div>

          <Link
            to={`${pathname}/trailer`}
            className="px-8 py-3 flex items-center justify-center gap-1 capitalize font-bold w-fit bg-purple-500 rounded-md max-sm:px-3 max-sm:py-2"
          >
            <i className="ri-play-circle-fill"></i>{" "}
            <h1 className="max-sm:text-sm">watch Trailer</h1>
          </Link>
        </div>
        <div className=" absolute top-0 w-full h-full bg-gradient-to-b from-zinc-700/0 to-zinc-900 opacity-100" />
      </div>

      <div className="text-white mt-5 flex flex-col gap-3 px-20 max-md:px-10 max-sm:px-5">
        <h4 className=" capitalize font-semibold text-2xl text-zinc-400">
          story line
        </h4>
        <p className="text-xd text-zinc-500">{info.detail.overview}</p>
        <div className="w-full flex gap-6 capitalize mt-2">
          {info.watchproviders &&
            info.watchproviders.buy &&
            info.watchproviders.buy.map((item, idx) => {
              return (
                <img
                  key={idx}
                  className="h-8 w-8 rounded-md"
                  src={`https://image.tmdb.org/t/p/original/${item.logo_path}`}
                  alt=""
                />
              );
            })}
        </div>
      </div>

      {info.detail.seasons && info.detail.seasons.length && (
        <div className="px-20 mt-16 max-sm:mt-5 flex flex-col gap-5 max-md:px-4 max-sm:gap-1">
          <h1 className="text-zinc-200 capitalize font-bold text-4xl max-md:text-2xl max-sm:text-xl">
            seasons
          </h1>
          <div className="flex overflow-auto gap-5 py-1">
            {info.detail.seasons.map((item, idx) => {
              return (
                <div key={idx} className="text-white flex flex-col gap-1">
                  <Link to={`/tv/details/${item.id}`}>
                    <Cards item={item} />
                  </Link>
                  <div className="px-2 gap-1">
                    <h1 className="text-xs">
                      {item.name.length > 16
                        ? item.name.substring(0, 16) + "..."
                        : item.name}
                    </h1>
                    <h2 className="text-xs text-zinc-500">
                      {item.release_date}
                    </h2>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {info.similar && info.similar.length && (
        <div className="px-20 mt-16 max-sm:mt-5 flex flex-col gap-5 max-md:px-4 max-sm:gap-1">
          <h1 className="text-zinc-200 capitalize font-bold text-4xl max-md:text-2xl max-sm:text-xl">
            similar
          </h1>
          <div className="flex overflow-auto gap-5 py-1">
            {info.similar.map((item, idx) => {
              return (
                <div key={idx} className="text-white flex flex-col gap-1">
                  <Link to={`/tv/details/${item.id}`}>
                    <Cards item={item} />
                  </Link>
                  <div className="px-2 gap-1">
                    <h1 className="text-xs">
                      {item.name.length > 16
                        ? item.name.substring(0, 16) + "..."
                        : item.name}
                    </h1>
                    <h2 className="text-xs text-zinc-500">
                      {item.release_date}
                    </h2>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {info.recommendations.length && info.recommendations.length && (
        <div className="px-20 mt-16 max-sm:mt-5 flex flex-col gap-5 max-md:px-4 max-sm:gap-1">
          <h1 className="text-zinc-200 capitalize font-bold text-4xl max-md:text-2xl max-sm:text-xl">
            recommendations
          </h1>
          <div className="flex overflow-auto gap-5 py-1">
            {info.recommendations.map((item, idx) => {
              return (
                <div key={idx} className="text-white flex flex-col gap-1">
                  <Link to={`/${item.media_type}/details/${item.id}`}>
                    <Cards item={item} />
                  </Link>
                  <div className="px-2 gap-1">
                    <h1 className="text-xs">
                      {item.name.length > 16
                        ? item.name.substring(0, 16) + "..."
                        : item.name}
                    </h1>
                    <h2 className="text-xs text-zinc-500">
                      {item.release_date}
                    </h2>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <Outlet />
    </div>
  ) : (
    <div className="w-full h-screen flex items-center justify-center">
      <PacmanLoader
        color="rgba(205, 214, 54, 1)"
        margin={5}
        size={80}
        speedMultiplier={1.5}
      />
    </div>
  );
};

export default TvShowDetails;

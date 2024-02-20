import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { asyncLoadPerson, removePerson } from "../stores/actions/PersonActions";
import { PacmanLoader } from "react-spinners";
import Cards from "./partials/Cards";

const PersonDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { info } = useSelector((item) => item.person);
  const nevigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(asyncLoadPerson(id));
    return () => {
      dispatch(removePerson());
    };
  }, [id]);

  return info ? (
    <div className="w-full pt-10 bg-[#18181B] max-sm:pt-0">
      <div className=" max-md:w-full max-lg:w-5/6 w-3/4 mx-auto h-[90vh] max-sm:flex-col max-sm:gap-5 max-sm:p-2 max-sm:h-fit bg-zinc-800 p-5 rounded-lg text-white flex gap-10">
        <img
          className="w-1/2 max-sm:w-full"
          src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
          alt=""
        />
        <div className="my-auto">
          <h1 className="capitalize text-5xl font-extrabold max-md:font-bold max-sm:text-2xl">
            {info.detail.name}
          </h1>
          <div className=" mt-8 flex flex-col gap-2 text-zinc-400 text-2xl max-sm:gap-1">
            <h3 className=" font-serif max-sm:text-sm">
              {info.detail.birthday}
            </h3>
            <h3 className="max-sm:text-xs">
              {info.detail.known_for_department}
            </h3>
            <h3 className="max-sm:text-sm max-sm:font-bold">{info.detail.place_of_birth}</h3>
            <div className="max-h-72 max-sm:max-h-32 overflow-auto">
              <p className=" mt-5 text-lg text-zinc-500 max-sm:text-sm">
                {info.detail.biography}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* images */}
      {info.images && info.images.profiles && (
        <div className="px-20 mt-16 flex flex-col gap-5 max-md:px-4">
          <h1 className="text-zinc-200 capitalize font-bold text-4xl max-md:text-2xl">
            images
          </h1>
          <div className="flex overflow-auto gap-5 py-1">
            {info.images.profiles.map((item, idx) => {
              return (
                <div key={idx} className="text-white flex flex-col gap-1">
                  <div to={`/movie/details/${item.id}`}>
                    <Cards item={item} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* movie_credits */}

      {info.movie_credits && info.movie_credits.cast && (
        <div className="px-20 mt-16 flex flex-col gap-5 max-md:px-4">
        <h1 className="text-zinc-200 capitalize font-bold text-4xl max-md:text-2xl">
            movie_credits
          </h1>
          <div className="flex overflow-auto gap-5 py-1">
            {info.movie_credits.cast.map((item, idx) => {
              return (
                <div key={idx} className="text-white flex flex-col gap-1">
                  <Link to={`/movie/details/${item.id}`}>
                    <Cards item={item} />
                    <div className="px-2 gap-1">
                      <h1 className="text-xs">
                        {item.title.length > 16
                          ? item.title.substring(0, 16) + "..."
                          : item.title}
                      </h1>
                      <h2 className="text-xs text-zinc-500">
                        {item.release_date}
                      </h2>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* tv_credits */}

      {info.tv_credits && info.tv_credits.cast && (
        <div className="px-20 mt-16 flex flex-col gap-5 max-md:px-4">
        <h1 className="text-zinc-200 capitalize font-bold text-4xl max-md:text-2xl">
            tv_credits
          </h1>
          <div className="flex overflow-auto gap-5 py-1">
            {info.tv_credits.cast.map((item, idx) => {
              return (
                <div key={idx} className="text-white flex flex-col gap-1">
                  <Link to={`/movie/details/${item.id}`}>
                    <Cards item={item} />
                  </Link>
                  <div className="px-2 gap-1">
                    <h1 className="text-xs">
                      {item.name.length > 16
                        ? item.name.substring(0, 16) + "..."
                        : item.name}
                    </h1>
                    <h2 className="text-xs text-zinc-500">
                      {item.first_air_date}
                    </h2>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
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

export default PersonDetails;

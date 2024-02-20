import { useEffect, useState } from "react";
import TopNev from "./partials/TopNev";
import DropDown from "./partials/DropDown";
import MainCards from "./partials/MainCards";
import axios from "../assets/axios";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { PacmanLoader } from "react-spinners";

const Movies = () => {
  const [trending, setTrending] = useState([]);
  const [catagory, setCatagory] = useState("now_playing");
  const [page, setPage] = useState(1);

  function getTrending() {
    axios
      .get(`/movie/${catagory}?page=${page}`)
      .then((data) => {
        if (trending.length > 0) {
          setTrending((pre) => [...pre, ...data.data.results]);
        } else {
          setTrending(data.data.results);
        }
        setPage(page + 1);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    setTrending([]);
    setPage(1);
    getTrending();
  }, [catagory]);

  return trending.length > 0 ? (
    <div className="w-full px-12 max-lg:px-5 h-fit py-2 bg-[#18181B]">
      <div className="flex items-center justify-between w-full h-[10%]">
        <Link
          to={"/"}
          className=" flex items-center justify-center gap-2 cursor-pointer text-zinc-500 font-extrabold text-2xl"
        >
          <i className="ri-arrow-left-line"></i>{" "}
          <h1 className="max-sm:hidden">Movies</h1>
        </Link>
        <TopNev />
        <div className="max-sm:hidden">
          <DropDown
            options={["now_playing", "popular", "top_rated", "upcoming"]}
            fn={(e) => setCatagory(e.target.value)}
            title={catagory}
          />
        </div>
      </div>
      <InfiniteScroll
        dataLength={trending.length}
        next={getTrending}
        hasMore={true}
        loader={
          <div className="w-full h-screen flex items-center justify-center">
            <PacmanLoader
              color="rgba(205, 214, 54, 1)"
              margin={5}
              size={80}
              speedMultiplier={1.5}
            />
          </div>
        }
      >
        <div className="w-full flex gap-8 max-sm:gap-5 h-fit flex-wrap overflow-auto justify-center items-center">
          {trending.map((e, i) => {
            return (
              <Link key={i} to={`/${e.media_type || "movie"}/details/${e.id}`}>
                <MainCards data={e} />
              </Link>
            );
          })}
        </div>
      </InfiniteScroll>
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

export default Movies;

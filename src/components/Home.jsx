import { useEffect, useState } from "react";
import { SideNev } from "./partials/SideNev";
import TopNev from "./partials/TopNev";
import Header from "./partials/Header";
import axios from "../assets/axios";
import HorizontalCards from "./partials/HorizontalCards";
import DropDown from "./partials/DropDown";
import { PacmanLoader } from "react-spinners";
import FloatingNev from "./partials/FloatingNev";

const Home = () => {
  const [trending, setTrending] = useState(null);

  const [trendingAll, setTrendingAll] = useState([]);

  const [catagory, setCatagory] = useState("all");
  const [floatingNev, setFloatingNev] = useState(false);

  function trendingRandom() {
    axios
      .get(`trending/all/day`)
      .then((data) => {
        setTrending(
          data.data.results[
            (Math.random() * data.data.results.length).toFixed()
          ]
        );
      })
      .catch((err) => console.log(err));
  }

  function trandingAllFn() {
    axios
      .get(`trending/${catagory}/day`)
      .then((data) => {
        setTrendingAll(data.data.results);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    !trending && trendingRandom();
    trandingAllFn();
  }, [catagory]);

  return trending !== null ? (
    <div className="flex w-full bg-[#18181B]">
      <div className=" hidden max-md:inline">
        {floatingNev && <FloatingNev setFloatingNev={setFloatingNev} />}
      </div>
      <div className="w-[20%] h-screen max-sm:hidden">
        <SideNev />
      </div>
      <div className="w-[80%] h-full leading-none max-sm:w-full">
        <div className="flex items-center justify-center">
          <i
            onClick={() => setFloatingNev(!floatingNev)}
            className="max-sm:block hidden ri-list-indefinite text-xl text-zinc-500 hover:text-purple-600 pl-2"
          ></i>
          <TopNev />
        </div>
        <Header data={trending} />
        <div className="flex items-center justify-between px-4 py-5">
          <h1 className="capitalize font-bold font-sans max-md:text-2xl text-zinc-500 text-3xl">
            Trendings
          </h1>
          <div className="max-sm:hidden">
            <DropDown
              options={["all", "movie", "tv"]}
              fn={(e) => setCatagory(e.target.value)}
              title={catagory}
            />
          </div>
        </div>
        <HorizontalCards trendingAll={trendingAll} />
      </div>
    </div>
  ) : (
    <div className="w-screen h-screen flex items-center justify-center">
      <PacmanLoader
        color="rgba(205, 214, 54, 1)"
        margin={5}
        size={80}
        speedMultiplier={1}
      />
    </div>
  );
};

export default Home;

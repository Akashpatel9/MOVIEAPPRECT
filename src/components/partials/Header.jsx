import { Link} from "react-router-dom";

const Header = ({ data }) => {
  return (
    <>
      <div className="relative w-full h-[50vh] overflow-hidden px-2">
        <img
          className="w-full h-full rounded-sm object-cover object-top"
          src={`https://image.tmdb.org/t/p/original/${
            data.backdrop_path || data.profile_path1||data.poster_path 
          }`}
          alt=""
        />

        <div className="absolute top-0 text-white w-full h-full flex flex-col item-center justify-center gap-3 pt-10 px-28 max-md:px-10 max-lg:px-10 max-sm:px-4">
          <h1 className="font-extrabold text-5xl uppercase max-md:text-3xl max-md:w-2/3">
            {data.name || data.original_title}
          </h1>
          <p className="max-w-2xl leading-none max-md:w-4/5 max-md:text-sm max-sm:h-20 max-sm:overflow-hidden">
            {data.overview.length > 50
              ? data.overview.substring(0, 200) + "..."
              : data.overview}
            <span className="text-blue-500 cursor-pointer">more</span>
          </p>
          <div className="flex gap-5 font-semibold">
            <h5 className="flex items-center justify-center gap-1 max-md:text-sm">
              <i className="text-yellow-400 ri-megaphone-fill"></i>
              {data.release_date || data.first_air_date}
            </h5>
            <h5 className="flex items-center justify-center max-md:text-sm gap-1 uppercase">
              <i className="text-yellow-400 ri-album-fill"></i>
              {data.media_type}
            </h5>
          </div>

          <div className="flex items-center justify-center w-fit gap-2 font-bold text-xl max-md:text-sm capitalize">
            <div className="w-8 h-8 p-5 bg-purple-500 rounded-full max-md:text-sm max-md:w-5 max-md:h-5  flex items-center justify-center">
              <h1 className="text-white font-bold">
                {
                (data.vote_average*10).toFixed()
                
                }
                <sup>%</sup>
              </h1>
            </div>
            <h1>user score</h1>
          </div>

          <Link
            to={`${data.media_type}/details/${data.id}`}
            className="px-8 py-3 max-md:py-2 max-md:text-sm capitalize font-bold w-fit bg-purple-500 rounded-md"
          > details
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;

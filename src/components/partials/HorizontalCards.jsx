import { Link } from "react-router-dom";
import Cards from "./Cards";

const HorizontalCards = ({ trendingAll }) => {
  return (
    <div className="px-2 overflow-hidden">
      <div className="overflow-auto w-full h-fit">
        <div className="flex w-fit gap-4 h-full">
          {trendingAll.map((item,i) => {
            return (
            <Link to={`/${item.media_type}/details/${item.id}`} key={i}><Cards item={item} /></Link>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default HorizontalCards;

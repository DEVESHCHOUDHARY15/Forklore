import useMainAPi from "@/CustomHooks/useMainAPi.jsx";
import Trc from "./Trc.jsx";
import Woym from "./Woym";
import Card from "@/Card/Card.jsx";
import FilterPop from "../Popup/FilterPop.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";

const Body = () => {
  const [showPop, setShowPop] = useState(false);
  const apidata = useMainAPi();
  const FilteredData =
    apidata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants;
  return apidata == "" ? (
    <h1>wait....</h1>
  ) : (
    <div>
      <Woym />
      <hr className="h-px w-4/5 mx-auto my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <Trc />
      <hr className="h-px w-4/5 mx-auto my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      {/* -------------Body Content---------------- */}
      <div>
        <h1 className="font-bold text-2xl  w-4/5 mx-auto py-2">
          Restaurants with online food delivery
        </h1>
        <button
          className="shadow-lg border rounded-2xl py-1 px-3 ml-32 my-3 font-semibold"
          onClick={() => setShowPop(true)}
        >
          Filter
        </button>
        <button className="shadow-lg border rounded-2xl py-1 px-3 ml-2 my-3 font-semibold">
          Coupon
        </button>
        {showPop && <FilterPop onClose={() => setShowPop(false)} />}
        <div className="flex flex-wrap w-4/5 mx-auto justify-between">
          {FilteredData.map((d) => (
            <Link key={d?.info?.id} to={`/restaurants/${d?.info?.id}`}>
              <Card d={d} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;

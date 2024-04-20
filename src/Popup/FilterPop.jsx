/* eslint-disable react/prop-types */
import { X } from "lucide-react";

const FilterPop = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-30 flex justify-center items-center backdrop-blur-sm">
      <div className="mt-10 flex flex-col gap-5 bg-white rounded-lg w-72 h-60 border border-gray-400">
        <button className="place-self-end" onClick={onClose}>
          <X />
        </button>
        <h1 className="font-bold px-2">Filter</h1>
        <div className="px-3 ">
          <h1 className="font-semibold">Ratings</h1>
          <input type="checkbox" value="4.0+" name="4.0+" /> Ratings 4.0+
          <input type="checkbox" value="4.0+" name="4.0+" /> Ratings 3.5+
        </div>
      </div>
    </div>
  );
};

export default FilterPop;

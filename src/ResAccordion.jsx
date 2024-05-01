/* eslint-disable react/prop-types */
import { IMAGE_URL } from "../Utils/Api";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";

const ResAccordion = ({ dd }) => {
  return (
    <Accordion type="single" collapsible className="w-1/2 mx-auto mt-4">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          {dd?.card?.card?.title} ({dd?.card?.card?.itemCards.length})
        </AccordionTrigger>
        <AccordionContent>
          {dd?.card?.card?.itemCards.map((md) => {
            return (
              <div key={md?.card?.info?.id}>
                <div className="flex justify-between">
                  <div>
                    <h1 className="font-semibold text-gray-700">
                      {md?.card?.info?.name}
                    </h1>
                    <h2 className="font-semibold text-gray-700 text-sm">
                      ₹{" "}
                      {md?.card?.info?.defaultPrice / 100
                        ? md?.card?.info?.defaultPrice / 100
                        : md?.card?.info?.price / 100}
                    </h2>
                    <h1 className="text-gray-500 break-normal w-3/4">
                      {md?.card?.info?.description}
                    </h1>
                  </div>
                  <div className="w-3/12 p-4">
                    <img
                      className="w-full h-32 object-cover rounded-xl "
                      src={IMAGE_URL + md?.card?.info?.imageId}
                      alt="img-box"
                    />
                    <button className="text-green-400 font-semibold rounded-xl shadow-lg py-2 px-4 mx-10 ">
                      Add+
                    </button>
                  </div>
                </div>
                <hr className="h-px w-full mx-auto my-8 bg-gray-200 border-0 dark:bg-gray-700" />
              </div>
            );
          })}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ResAccordion;

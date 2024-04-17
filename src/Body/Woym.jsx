// import { Card, CardContent } from "../components/ui/carousel";
import { IMAGE_URL, MAIN_API } from "../../Utils/Api";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import { useEffect, useState } from "react";

const Woym = () => {
  const [woymdata, setWoymdata] = useState("");
  const GettingData = async () => {
    const resp = await fetch(MAIN_API);
    const json = await resp.json();
    if (!resp.ok) {
      throw new Error(`API request failed with status ${resp.status}`);
    }
    setWoymdata(json);
  };

  //   console.log(woymdata);
  console.log(woymdata?.data?.cards[0]?.card?.card?.header?.title);
  const title = woymdata?.data?.cards[0]?.card?.card?.header?.title;
  const FilteredData =
    woymdata?.data?.cards[0]?.card?.card?.imageGridCards?.info;
  console.log("this is Filtered Data>>>>", FilteredData);

  useEffect(() => {
    GettingData();
  }, []);

  return woymdata == "" ? (
    <h1>Wait...</h1>
  ) : (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-4/5 mx-auto"
    >
      <h1 className="font-bold text-2xl p-2">{title}</h1>
      <CarouselContent>
        {/* {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/6">
            <div className="p-1">
              <div>
                <div className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))} */}
        {FilteredData.map((d) => (
          <CarouselItem key={d?.id} className="md:basis-1/2 lg:basis-1/6">
            <div className="p-1">
              <div className="flex aspect-square items-center justify-center p-4">
                <img
                  className="cursor-pointer"
                  src={IMAGE_URL + d?.imageId}
                  alt="Food-Slider"
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Woym;

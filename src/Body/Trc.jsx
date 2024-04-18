import useMainAPi from "@/CustomHooks/useMainAPi";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import Card from "../Card/Card";

const Trc = () => {
  const apidata = useMainAPi();

  console.log(
    "TRc DATa>>>>",
    apidata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants
  );

  const FilteredData =
    apidata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants;
  // console.log("this is Filtered Data>>>>", FilteredData);

  return apidata == "" ? (
    <h1>Wait...</h1>
  ) : (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-4/5 mx-auto"
    >
      <h1 className="font-bold text-2xl p-2">Top restaurant chains in Delhi</h1>
      <CarouselContent>
        {FilteredData.map((d) => (
          <CarouselItem key={d?.id} className="md:basis-1/2 lg:basis-1/4">
            <Card d={d} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
export default Trc;
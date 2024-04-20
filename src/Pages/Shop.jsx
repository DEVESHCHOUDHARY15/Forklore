import useRestaurant from "../CustomHooks/useRestaurant";

const Shop = () => {
  const data = useRestaurant();
  console.log("this is shop data>>>>>", data);

  const FilteredData = data?.data?.cards[2]?.card?.card?.info;

  return (
    <div>
      <h1>{FilteredData?.name}</h1>
    </div>
  );
};

export default Shop;

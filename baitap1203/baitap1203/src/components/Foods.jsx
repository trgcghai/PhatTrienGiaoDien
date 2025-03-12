import { useEffect, useState } from "react";
import DishCard from "./DishCard";

const Foods = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "https://67c7c86ec19eb8753e7aba01.mockapi.io/foods";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("failed to fetch");
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-10 mt-8">
      {data.map((food) => (
        <DishCard key={food.id} name={food.name} imgUrl={food.imgUrl} cookTime={food.cookTime} />
      ))}
    </div>
  );
};

export default Foods;

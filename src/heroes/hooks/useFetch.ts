import { useEffect, useState } from "react";
import { getAllHeroes } from "../helpers/getAllHeroes";
import { Hero } from "../types";

export const useFetchHeroes = () => {
  const [data, setData] = useState<Array<Hero>>([]);
  const [loading, setLoading] = useState<Boolean>(true);

  const getData = async () => {
    const allData = await getAllHeroes();
    setData(allData);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    data,
    loading,
  };
};

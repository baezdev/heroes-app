import { Hero } from "../types";
import { getAllHeroes } from "./getAllHeroes";

export const getHeroesByPublisher = async (
  publisher: string
): Promise<Hero[]> => {
  const data = await getAllHeroes();
  const heroes = data.filter(
    ({ biography }: Hero) => biography.publisher === publisher
  );

  return heroes;
};

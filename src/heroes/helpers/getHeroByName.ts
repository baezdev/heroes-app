import { Hero } from "../types";
import { getAllHeroes } from "./getAllHeroes";

export const getHeroByName = async (name: string): Promise<any> => {
  const heroes: Hero[] = await getAllHeroes();

  return heroes.filter((hero) => hero.name.toLowerCase().trim().includes(name));
};

import { Hero } from "../types";

export const getHeroById = async (id: string | undefined): Promise<Hero> => {
  const baseUrl = `https://akabab.github.io/superhero-api/api/id/${id}.json`;

  const response = await fetch(baseUrl);
  const data = await response.json();

  return data;
};

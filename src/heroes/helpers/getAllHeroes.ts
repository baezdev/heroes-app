export const getAllHeroes = async () => {
  const baseUrl = "https://akabab.github.io/superhero-api/api/all.json";

  const response = await fetch(baseUrl);
  const data = await response.json();

  return data;
};

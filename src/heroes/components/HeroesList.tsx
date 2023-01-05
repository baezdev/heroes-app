import { useEffect, useState } from "react";
import { Loader } from "../../components";
import { HeroCard, HeroesContainer } from "../components";
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";
import { Hero } from "../types";

interface States {
  heroes: Hero[];
}

interface Props {
  publisher: string;
}

export const HeroesList = ({ publisher }: Props) => {
  const [heroes, setHeroes] = useState<States["heroes"]>([]);
  const getPublisher = async () => {
    const resp = await getHeroesByPublisher(publisher);
    setHeroes(resp);
  };

  useEffect(() => {
    getPublisher();
  }, [getPublisher]);

  return (
    <>
      {heroes.length === 0 && <Loader />}
      <HeroesContainer>
        {heroes.map((hero) => (
          <HeroCard key={hero.id} hero={hero} />
        ))}
      </HeroesContainer>
    </>
  );
};

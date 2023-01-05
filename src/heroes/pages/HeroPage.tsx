import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "../../components";
import { Appearance, Biography, PowerStats } from "../components";
import { getHeroById } from "../helpers/getHeroById";
import { Hero } from "../types";

interface States {
  hero: Hero;
}

export const HeroPage = () => {
  const [hero, setHero] = useState<States["hero"]>();
  const params = useParams();

  const getHero = async (): Promise<void> => {
    const heroData = await getHeroById(params?.heroId);
    setHero(heroData);
  };

  useEffect(() => {
    getHero();
  }, []);

  return (
    <Container>
      <div className="md:flex gap-10 animate__animated animate__fadeIn">
        <section className="w-4/5 mx-auto mb-6 md:w-1/4">
          <img src={hero?.images.md} className="rounded-3xl" />
        </section>
        <section className="w-full md:w-3/4">
          <h3 className="font-bold text-5xl mb-4 text-center md:text-left">
            {hero?.name}
          </h3>
          <p className="font-semibold text-2xl text-center md:text-left">
            {hero?.biography.fullName}
          </p>
          <div className="mt-10 flex flex-col md:grid grid-cols-3 gap-6 w-full px-3 md:px-0">
            <PowerStats hero={hero} />
            <Appearance hero={hero} />
            <Biography hero={hero} />
          </div>
        </section>
      </div>
    </Container>
  );
};

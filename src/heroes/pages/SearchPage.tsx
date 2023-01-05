import { useEffect, useState } from "react";
import { useForm } from "../../hooks/useForm";

import { Container, SearchBar } from "../../components";

import { HeroCard, HeroesContainer } from "../components";
import { getHeroByName } from "../helpers/getHeroByName";
/* import { HeroCard, HeroesContainer } from "../components"; */

export const SearchPage = () => {
  const [heroes, setHeroes] = useState([]);

  const { formValues, handleChange } = useForm({
    search: "",
  });

  useEffect(() => {
    if (formValues.search.length >= 3) {
      getHeroByName(formValues.search.toLowerCase()).then((data) =>
        setHeroes(data)
      );
    }
    if (formValues.search.length < 3) {
      setHeroes([]);
    }
  }, [formValues]);

  return (
    <Container>
      <section className="animate__animated animate__fadeIn">
        <h2 className="text-4xl text-center font-bold mb-4">Search Hero</h2>
        <div className="flex justify-center md:my-6 mb-9">
          <SearchBar value={formValues.search} handleChange={handleChange} />
        </div>
        <p
          className={`text-3xl text-center md:text-left font-medium ${
            formValues.search.length >= 3 ? "hidden" : "block"
          }`}
        >
          The results will be here
        </p>

        {heroes.length > 0 && (
          <HeroesContainer>
            {heroes.map((hero, i) => (
              <HeroCard key={i} hero={hero} />
            ))}
          </HeroesContainer>
        )}

        <p
          className={`text-3xl text-center md:text-left font-medium ${
            formValues.search.length > 3 && heroes.length === 0
              ? "block"
              : "hidden"
          }`}
        >
          The hero does not exist
        </p>
      </section>
    </Container>
  );
};

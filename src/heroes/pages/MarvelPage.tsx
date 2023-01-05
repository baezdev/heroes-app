import { HeroesList } from "../components/HeroesList";

export const MarvelPage = () => {
  return (
    <section className="animate__animated animate__fadeIn">
      <h2 className="text-4xl text-center font-bold mb-4">Marvel Comics</h2>
      <HeroesList publisher="Marvel Comics" />
    </section>
  );
};

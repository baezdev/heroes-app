import { HeroesList } from "../components/HeroesList";

export const DcPage = () => {
  return (
    <section className="animate__animated animate__fadeIn">
      <h2 className="text-4xl text-center font-bold mb-4">DC Comics</h2>
      <HeroesList publisher="DC Comics" />
    </section>
  );
};

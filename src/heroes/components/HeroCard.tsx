import { Link } from "react-router-dom";
import { Hero } from "../types";

interface Props {
  hero: Hero;
}

export const HeroCard = ({ hero }: Props) => {
  const { id, name, images } = hero;

  return (
    <div className="flex w-full rounded-3xl border bg-slate-50 hover:scale-105 transition-all duration-300 animate__animated animate__fadeIn">
      <img src={images.md} alt={name} className="w-2/4 rounded-l-3xl" />
      <div className="px-3 py-5 w-2/4 flex flex-col justify-between">
        <div>
          <p className="text-xl font-bold text-right mb-4"># {id}</p>
          <p className="text-xl font-semibold">{name}</p>
        </div>
        <Link
          to={`/hero/${id}`}
          className="px-3 py-1 rounded-lg border-4 border-black text-base capitalize text-center font-bold hover:bg-black hover:text-white"
        >
          see more
        </Link>
      </div>
    </div>
  );
};

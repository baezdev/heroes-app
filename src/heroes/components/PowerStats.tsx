import { InfoCard } from "../../components";
import { Hero } from "../types";

interface Props {
  hero: Hero | undefined;
}

export const PowerStats = ({ hero }: Props) => {
  return (
    <InfoCard>
      <h4 className="font-bold text-xl">Power Stats</h4>
      <ul className="capitalize mt-2 text-lg">
        <li className="flex justify-between font-medium">
          combat: <span className="font-bold">{hero?.powerstats.combat}</span>
        </li>
        <li className="flex justify-between font-medium">
          durability:{" "}
          <span className="font-bold">{hero?.powerstats.durability}</span>
        </li>
        <li className="flex justify-between font-medium">
          intelligence:{" "}
          <span className="font-bold">{hero?.powerstats.intelligence}</span>
        </li>
        <li className="flex justify-between font-medium">
          power: <span className="font-bold">{hero?.powerstats.power}</span>
        </li>
        <li className="flex justify-between font-medium">
          speed: <span className="font-bold">{hero?.powerstats.speed}</span>
        </li>
        <li className="flex justify-between font-medium">
          strength:{" "}
          <span className="font-bold">{hero?.powerstats.strength}</span>
        </li>
      </ul>
    </InfoCard>
  );
};

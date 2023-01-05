import { InfoCard } from "../../components";
import { Hero } from "../types";

interface Props {
  hero: Hero | undefined;
}

export const Appearance = ({ hero }: Props) => {
  return (
    <InfoCard>
      <h4 className="font-bold text-xl">Appearance</h4>
      <ul className="capitalize mt-2 text-lg">
        <li className="flex justify-between font-medium">
          gender: <span className="font-bold">{hero?.appearance.gender}</span>
        </li>
        <li className="flex justify-between font-medium">
          height:
          <span className="font-bold">{hero?.appearance.height[1]}</span>
        </li>
        <li className="flex justify-between font-medium">
          weight:
          <span className="font-bold">{hero?.appearance.weight[1]}</span>
        </li>
        <li className="flex justify-between font-medium">
          race:
          <span className="font-bold">{hero?.appearance.race}</span>
        </li>
        <li className="flex justify-between font-medium">
          eye color:
          <span className="font-bold">{hero?.appearance.eyeColor}</span>
        </li>
        <li className="flex justify-between font-medium">
          hair color:
          <span className="font-bold">{hero?.appearance.hairColor}</span>
        </li>
      </ul>
    </InfoCard>
  );
};

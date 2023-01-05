import { InfoCard } from "../../components";
import { Hero } from "../types";

interface Props {
  hero: Hero | undefined;
}

export const Biography = ({ hero }: Props) => {
  return (
    <InfoCard>
      <h4 className="font-bold text-xl">Biography</h4>
      <ul className="capitalize mt-2 text-lg">
        <li className="flex justify-between font-medium">
          full name:
          <span className="font-bold">{hero?.biography.fullName}</span>
        </li>
        <li className="flex justify-between font-medium">
          place of birth:
          <span className="font-bold text-right">
            {hero?.biography.placeOfBirth}
          </span>
        </li>
        <li className="flex justify-between font-medium">
          first appearance:
          <span className="font-bold text-right">
            {hero?.biography.firstAppearance}
          </span>
        </li>
        <li className="flex justify-between font-medium">
          publisher:
          <span className="font-bold">{hero?.biography.publisher}</span>
        </li>
      </ul>
    </InfoCard>
  );
};

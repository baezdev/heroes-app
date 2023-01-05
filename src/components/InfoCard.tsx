import { FC } from "react";

interface Props {
  children: JSX.Element[] | JSX.Element;
}

export const InfoCard: FC<Props> = ({ children }) => {
  return <div className="p-5 rounded-3xl bg-gray-50 border">{children}</div>;
};

import { FC } from "react";

interface Props {
  children: JSX.Element[] | JSX.Element;
}

export const Container: FC<Props> = ({ children }) => {
  return <div className="container mx-auto mb-7">{children}</div>;
};

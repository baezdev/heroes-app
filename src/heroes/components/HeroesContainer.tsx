interface Props {
  children: JSX.Element | JSX.Element[];
}

export const HeroesContainer = ({ children }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-10 w-11/12 mx-auto md:w-full animate__animated animate__fadeIn">
      {children}
    </div>
  );
};

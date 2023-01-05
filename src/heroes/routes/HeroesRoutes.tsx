import { Navigate, Route, Routes } from "react-router-dom";
import { Container, Navbar } from "../../components";
import { DcPage, HeroPage, MarvelPage, SearchPage } from "../pages";

export const HeroesRoutes = () => {
  return (
    <Container>
      <Navbar />
      <Routes>
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DcPage />} />
        <Route path="hero/:heroId" element={<HeroPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="/" element={<Navigate to={"marvel"} />} />
        <Route path="/*" element={<Navigate to={"marvel"} />} />
      </Routes>
    </Container>
  );
};

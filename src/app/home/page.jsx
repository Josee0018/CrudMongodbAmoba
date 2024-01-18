"use client";

import { BrowserRouter } from "react-router-dom/dist";
import RoutesContainer from "@/Routes";

const Home = () => {
  return (
    <BrowserRouter>
      <RoutesContainer />
    </BrowserRouter>
  );
};

export default Home;

import type { NextPage } from "next";
import { Header } from "../components/Header";
import { styled } from "@stitches/react";
import { Navigation } from "../components/Navegation";
import { Sidebar } from "../components/Sidebar";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";

const Wrapper = styled("div", {
  maxWidth: "80rem",
  display: "grid",
  gridTemplateAreas:
    '"logo logo"\n"nav nav"\n"content sidebar"\n"footer footer"',
});

const Home: NextPage = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <Navigation />
        <Sidebar />
        <Main />
        <Footer />
      </Wrapper>
    </>
  );
};

export default Home;

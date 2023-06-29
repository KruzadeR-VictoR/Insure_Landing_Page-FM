import { Box } from "@chakra-ui/react";
import "./App.css";
import Banner from "./Componets/Banner";
import Features from "./Componets/Features";
import Footer from "./Componets/Footer";
import Header from "./Componets/Header";
import Hero from "./Componets/Hero";

function App() {
  return (
    <>
      <Header />
      <Box as={"main"}>
        <Hero />
        <Features />
        <Banner />
      </Box>
      <Footer />
    </>
  );
}

export default App;

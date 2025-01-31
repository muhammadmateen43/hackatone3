import React from "react";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import HeroSection from "./components/heroSection";
import Footer from "./components/footer";

const App = async () => {
  const products = await client.fetch(groq`[_type == "product"]`);
  console.log(products);

  return (
    <div>
      <HeroSection />
      <Footer></Footer>
    </div>
  );
};

export default App;

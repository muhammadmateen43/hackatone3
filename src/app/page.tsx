import React from "react";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import HeroSection from "./components/heroSection";
import Footer from "./components/footer";
// import Cart from "./components/cart";

const App = async () => {
  const products = await client.fetch(groq`[_type == "product"]`);
  console.log(products);

  return (
    <>
      {/* <Cart></Cart> */}
      <HeroSection />
      <Footer></Footer>
    </>
  );
};

export default App;

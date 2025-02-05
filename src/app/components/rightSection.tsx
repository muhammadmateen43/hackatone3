"use client";

import React, { useEffect, useState } from "react";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import Card from "./card";

interface Product {
  name: string;
  model: string;
  images: string[];
  slug: { current: string };
  patrol_quantity: number;
  car_type: string;
  seats_capacity: number;
  price: number;
}

const RightSection = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await client.fetch(groq`*[_type == "product"]`);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((data, index) => (
          <Card key={index} data={data}></Card>
        ))}
      </div>
    </div>
  );
};

export default RightSection;

"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

import CardDetails from "@/app/components/cardDetails";
import LeftSection from "@/app/components/leftSection";
import ReviewsCard from "@/app/components/reviews";
import Footer from "@/app/components/footer";

interface Car {
  carType: string;
  quantity: number;
}

interface Capacity {
  seatCapacity: number;
  quantity: number;
}

interface Product {
  name: string;
  model: string;
  images: string[]; // Ideally, use SanityImageSource[] if you have Sanity types
  slug: { current: string };
  patrol_quantity: number;
  car_type: string;
  seats_capacity: number;
  price: number;
}

const Page = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const { slug } = useParams();

  // Sample Data for Filters
  const cars: Car[] = [
    { carType: "Sport", quantity: 14 },
    { carType: "SUV", quantity: 12 },
    { carType: "MPV", quantity: 16 },
    { carType: "Sedan", quantity: 20 },
    { carType: "Coupon", quantity: 14 },
    { carType: "Hatchback", quantity: 16 },
  ];

  const capacities: Capacity[] = [
    { seatCapacity: 2, quantity: 14 },
    { seatCapacity: 4, quantity: 12 },
    { seatCapacity: 6, quantity: 16 },
    { seatCapacity: 8, quantity: 10 },
  ];

  // Fetch product from Sanity CMS
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const products: Product[] = await client.fetch(
          groq`*[_type == "product"]`
        );
        const foundProduct = products.find((p) => p.slug.current === slug);
        setProduct(foundProduct || null);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    if (slug) {
      fetchProduct();
    }
  }, [slug]);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="flex flex-col w-full">
        <div className="flex">
          {/* Left Sidebar */}
          <div>
            <LeftSection cars={cars} capacities={capacities} />
          </div>

          {/* Main Content */}
          <div className="flex flex-col w-full p-4">
            {product ? (
              <CardDetails product={product} />
            ) : (
              <p>Loading product...</p>
            )}
            <ReviewsCard />
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Page;

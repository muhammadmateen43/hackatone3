import Image from "next/image";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";
import React from "react";

// ✅ Define TypeScript Interface for Product Data
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

// ✅ Pass the defined Type to the Card Component Props
const Card: React.FC<{ data: Product }> = ({ data }) => {
  return (
    <div className="card bg-white rounded-lg shadow-md p-4 text-center">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-bold text-gray-900">{data.name}</h1>
        <FaHeart className="text-gray-500 cursor-pointer hover:text-red-500" />
      </div>

      <p className="text-sm text-gray-600">{data.model}</p>

      <div className="flex justify-center my-4">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          {data.images && data.images.length > 0 && (
            <Image
              src={urlForImage(data.images[0]).url()}
              alt={data.slug.current}
              width={200}
              height={200}
              className="object-contain"
            />
          )}
        </motion.div>
      </div>

      <div className="flex justify-between text-gray-700 text-sm my-4">
        <div className="flex items-center gap-1">
          <span>⛽</span>
          <p>{data.patrol_quantity}/L</p>
        </div>
        <div className="flex items-center gap-1">
          <span>⚙️</span>
          <p>{data.car_type}</p>
        </div>
        <div className="flex items-center gap-1">
          <span>👥</span>
          <p>{data.seats_capacity}</p>
        </div>
      </div>

      <div className="flex justify-between items-center mt-4">
        <p className="text-xl font-bold text-gray-900">
          ${data.price}
          <span></span>
        </p>
        <Link
          href={`/data/${data.slug.current}`} // ✅ Fixed incorrect string interpolation
          className="bg-gray-600 text-white px-3 mr-1 py-1 rounded-lg hover:bg-gray-700 transition "
        >
          view details
        </Link>
      </div>
    </div>
  );
};

export default Card;

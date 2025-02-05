"use client";

import React, { useContext, useState } from "react";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import type { Product } from "@/sanity/schemas/productSchema";
import { CartContext } from "../context/cartContext";

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

interface CardDetailsProps {
  product: Product;
}

const CardDetails: React.FC<CardDetailsProps> = ({ product }) => {
  const { cartItems, addProduct, incQty, decQty, qty, setQty }: any =
    useContext(CartContext);

  console.log(cartItems);

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row gap-6">
      {/* Left Section - Image and Thumbnails */}
      <div className="w-full md:w-1/2">
        <div className="bg-blue-500 text-white p-4 rounded-xl text-center">
          <h3 className="text-lg font-semibold">
            {product.name} - Best Design & Acceleration
          </h3>
          <p className="text-sm">
            Safety and comfort while driving a futuristic sports car.
          </p>
          {product.images && product.images.length > 0 && (
            <Image
              loader={() => urlForImage(product.images[0]).url()}
              src={urlForImage(product.images[0]).url()}
              alt={product.name}
              height={200}
              width={400}
              className="w-full mt-2 rounded-md"
            />
          )}
        </div>

        {/* Thumbnails */}
        <div className="flex justify-center md:justify-start gap-2 mt-2">
          {product.images
            ?.slice(1, 4)
            .map((img: string, index: number) => (
              <Image
                src={urlForImage(product.images[0]).url()}
                alt={product.name}
                height={200}
                width={400}
                className="w-full mt-2 rounded-md"
              />
            ))}
        </div>
      </div>

      {/* Right Section - Details */}
      <div className="w-full md:w-1/2 md:mt-10">
        <div className="flex justify-between items-start">
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <span className="text-red-500 text-2xl cursor-pointer">❤️</span>
        </div>
        <p className="text-gray-500 text-sm">⭐ 440+ Reviews</p>
        <p className="text-gray-600 text-sm mt-2">{product.model}</p>

        {/* Car Details Grid */}
        <div className="grid grid-cols-2 gap-4 mt-3 text-sm text-gray-700">
          <div>
            <strong>Type:</strong> {product.car_type}
          </div>
          <div>
            <strong>Capacity:</strong> {product.seats_capacity} Person
          </div>
          <div>
            <strong>Steering:</strong> Manual
          </div>
          <div>
            <strong>Gasoline:</strong> {product.patrol_quantity}L
          </div>
        </div>

        {/* Price & Actions */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-6">
          {/* Price Display */}
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <span className="text-2xl font-bold">totalPrice</span>
            <p className="text-gray-400 text-sm line-through">
              {/* ${Math.round(product.price * 1.25) * quantity} */}
            </p>
          </div>

          {/* Quantity Controls */}
          <div className="flex items-center space-x-3">
            <button
              onClick={decQty}
              className={`bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 
              }`}
            >
              -
            </button>
            <span className="text-lg font-bold">{qty}</span>
            <button
              onClick={incQty}
              className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700"
            >
              +
            </button>
          </div>

          {/* Buy Now Button */}
          <button
            onClick={() => {
              setQty(1); // Reset quantity to 1 after adding
              addProduct(product, qty); // Add the product to cart
            }}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition w-full sm:w-auto mt-4 sm:mt-0"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;

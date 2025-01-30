import React from "react";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import Link from "next/link";

// Define the TypeScript interface for car data
interface CarData {
  id: number;
  name: string;
  model: string;
  imageUrl: string;
  patrolQuantity: number;
  typeOfTransmission: string;
  seatsCapacity: number;
  pricePerDay: number;
}

const RightSection = ({ carData }: { carData: CarData[] }) => {
  return (
    <div>
      <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {carData.map((data) => (
          <div
            key={data.id} // Changed from data.name to data.id for uniqueness
            className="card bg-white rounded-lg shadow-md p-4 text-center"
          >
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-lg font-bold text-gray-900">{data.name}</h1>
              <FaHeart className="text-gray-500 cursor-pointer hover:text-red-500" />
            </div>
            <p className="text-sm text-gray-600">{data.model}</p>
            <div className="flex justify-center my-4">
              <Image
                src={data.imageUrl}
                alt={data.name}
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
            <div className="flex justify-between text-gray-700 text-sm my-4">
              <div className="flex items-center gap-1">
                <span>⛽</span>
                <p>{data.patrolQuantity}/L</p>
              </div>
              <div className="flex items-center gap-1">
                <span>⚙️</span>
                <p>{data.typeOfTransmission}</p>
              </div>
              <div className="flex items-center gap-1">
                <span>👥</span>
                <p>{data.seatsCapacity}</p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <p className="text-xl font-bold text-gray-900">
                {data.pricePerDay}
                <span>/ day</span>
              </p>

              <Link
                href={`/cars/${data.id}`}
                className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition"
              >
                Rental Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightSection;

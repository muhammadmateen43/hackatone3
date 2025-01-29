"use client";
import React, { useState } from "react";

interface Car {
  carType: string;
  quantity: number;
}

interface Capacity {
  seatCapacity: number;
  quantity: number;
}

interface LeftSectionProps {
  cars: Car[];
  capacities: Capacity[];
}

export default function LeftSection({
  cars = [],
  capacities = [],
}: LeftSectionProps) {
  const [selectedCarTypes, setSelectedCarTypes] = useState<string[]>([]);
  const [selectedSeatCapacities, setSelectedSeatCapacities] = useState<
    number[]
  >([]);

  const toggleCarType = (carType: string) => {
    setSelectedCarTypes((prev) =>
      prev.includes(carType)
        ? prev.filter((type) => type !== carType)
        : [...prev, carType]
    );
  };

  const toggleSeatCapacity = (seatCapacity: number) => {
    setSelectedSeatCapacities((prev) =>
      prev.includes(seatCapacity)
        ? prev.filter((cap) => cap !== seatCapacity)
        : [...prev, seatCapacity]
    );
  };

  return (
    <div className="hidden md:block bg-gray-100 p-4 w-full md:w-80 rounded-lg shadow-md">
      <h1 className="font-thin text-gray-600 mb-2">Type</h1>
      {cars.map((data) => (
        <div
          key={data.carType}
          className={`flex items-center mb-4 cursor-pointer ${selectedCarTypes.includes(data.carType) ? "text-blue-600" : ""}`}
          onClick={() => toggleCarType(data.carType)}
        >
          <input
            type="checkbox"
            className="ml-2 my-4 w-4 h-4 text-blue-600 border-gray-300 rounded"
            checked={selectedCarTypes.includes(data.carType)}
            readOnly
          />
          <label className="ms-2 text-sm font-bold text-gray-900">
            {data.carType} ({data.quantity})
          </label>
        </div>
      ))}
      <h1 className="font-thin text-gray-600 mb-2">Capacity</h1>
      {capacities.map((data) => (
        <div
          key={data.seatCapacity}
          className={`flex items-center mb-4 cursor-pointer ${selectedSeatCapacities.includes(data.seatCapacity) ? "text-blue-600" : ""}`}
          onClick={() => toggleSeatCapacity(data.seatCapacity)}
        >
          <input
            type="checkbox"
            className="ml-2 my-4 w-4 h-4 text-blue-600 border-gray-300 rounded"
            checked={selectedSeatCapacities.includes(data.seatCapacity)}
            readOnly
          />
          <label className="ms-2 text-sm font-bold text-gray-900">
            {data.seatCapacity} ({data.quantity})
          </label>
        </div>
      ))}
    </div>
  );
}

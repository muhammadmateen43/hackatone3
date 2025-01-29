"use client";

import React, { useState } from "react";

export default function LeftSection({ cars, capacities }) {
  const [selectedCarType, setSelectedCarType] = useState(null);
  const [selectedSeatCapacity, setSelectedSeatCapacity] = useState(null);

  return (
    <div className="hidden md:block bg-gray-100 p-4 w-full md:w-80 rounded-lg shadow-md">
      <h1 className="font-thin text-gray-600 mb-2">Type</h1>
      {cars.map((data) => (
        <div
          key={data.carType}
          className={`flex items-center mb-4 cursor-pointer ${
            selectedCarType === data.carType ? "text-blue-600" : ""
          }`}
          onClick={() =>
            setSelectedCarType(
              selectedCarType === data.carType ? null : data.carType
            )
          }
        >
          <input
            type="checkbox"
            className="ml-2 my-4 w-4 h-4 text-blue-600 border-gray-300 rounded"
            checked={selectedCarType === data.carType}
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
          className={`flex items-center mb-4 cursor-pointer ${
            selectedSeatCapacity === data.seatCapacity ? "text-blue-600" : ""
          }`}
          onClick={() =>
            setSelectedSeatCapacity(
              selectedSeatCapacity === data.seatCapacity
                ? null
                : data.seatCapacity
            )
          }
        >
          <input
            type="checkbox"
            className="ml-2 my-4 w-4 h-4 text-blue-600 border-gray-300 rounded"
            checked={selectedSeatCapacity === data.seatCapacity}
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

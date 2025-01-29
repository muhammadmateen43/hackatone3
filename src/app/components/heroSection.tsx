import LeftSection from "./leftSection";
import RightSection from "./rightSection";

export default function HeroSection() {
  interface Car {
    carType: string;
    quantity: number;
  }
  const cars: Car[] = [
    { carType: "Sport", quantity: 14 },
    { carType: "SUV", quantity: 12 },
    { carType: "MPV", quantity: 16 },
    { carType: "Sedan", quantity: 20 },
    { carType: "Coupon", quantity: 14 },
    { carType: "Hatchback", quantity: 16 },
  ];
  interface Capacity {
    seatCapacity: number;
    quantity: number;
  }

  const capacities: Capacity[] = [
    { seatCapacity: 2, quantity: 14 },
    { seatCapacity: 4, quantity: 12 },
    { seatCapacity: 6, quantity: 16 },
    { seatCapacity: 8, quantity: 10 },
  ];

  const carData = [
    {
      id: 1,
      carName: "Koenigsegg",
      type: "SUV",
      patrolQuantity: "90L",
      typeOfTransmission: "Manual",
      seatsCapacity: "6 People",
      pricePerDay: "$74.00",
      image: "/koenigsegg.webp",
    },
    {
      id: 2,
      carName: "Nissan GT-R",
      type: "SUV",
      patrolQuantity: "80L",
      typeOfTransmission: "Automatic",
      seatsCapacity: "8 People",
      pricePerDay: "$80.00",
      image: "/nisangt-r.webp",
    },
    {
      id: 3,
      carName: "Rolls Royce",
      type: "Sedan",
      patrolQuantity: "80L",
      typeOfTransmission: "Automatic",
      seatsCapacity: "8 People",
      pricePerDay: "$80.00",
      image: "/rollsroyce.webp",
    },
    {
      id: 4,
      carName: "Sports Car",
      type: "Sport",
      patrolQuantity: "80L",
      typeOfTransmission: "Automatic",
      seatsCapacity: "2 People",
      pricePerDay: "$200.00",
      image: "/sportscar.webp",
    },
  ];
  return (
    <>
      {/* Hero Section */}
      <div className="hero flex flex-col md:flex-row gap-4 my-4 px-4">
        {/* Left Section */}
        <LeftSection cars={cars} capacities={capacities} />

        {/* Right Section */}
        <RightSection carData={carData} />
      </div>
    </>
  );
}

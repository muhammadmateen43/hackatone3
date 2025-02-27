import LeftSection from "./leftSection";
import RightSection from "./rightSection";

export default function HeroSection() {
  // Define Car Type Interface
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

  // Define Capacity Interface
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

  // Corrected Interface Naming (Use PascalCase)
  // interface CarData {
  //   id: number;
  //   name: string;
  //   model: string;
  //   year: number;
  //   pricePerDay: number;
  //   patrolQuantity: number;
  //   typeOfTransmission: string;
  //   seatsCapacity: number;
  //   imageUrl: string;
  // }

  // Car Data Array
  // const carData: CarData[] = [
  //   {
  //     id: 1,
  //     name: "koenigsegg",
  //     model: "XLE",
  //     year: 2023,
  //     pricePerDay: 25000,
  //     patrolQuantity: 20,
  //     typeOfTransmission: "Automatic",
  //     imageUrl: "/koenigsegg.webp",
  //     seatsCapacity: 4,
  //   },
  // ];

  return (
    <>
      {/* Hero Section */}
      <div className="hero flex flex-col md:flex-row gap-4 my-4 px-4">
        {/* Left Section */}
        <LeftSection cars={cars} capacities={capacities} />

        {/* Right Section */}
        {/* <RightSection carData={carData} /> */}
        <RightSection />
      </div>
    </>
  );
}

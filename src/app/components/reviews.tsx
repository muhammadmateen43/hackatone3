"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Star } from "lucide-react";
import Image from "next/image";

const reviews = [
  {
    id: 1,
    name: "Alex Stanton",
    role: "CEO at Bukalapak",
    date: "21 July 2022",
    rating: 4,
    review:
      "We are very happy with the service from the MORENT App. Morent has a low price...",
    image: "/mateen.jpg",
  },
  {
    id: 2,
    name: "Skylar Dias",
    role: "CEO at Amazon",
    date: "20 July 2022",
    rating: 4,
    review:
      "We are greatly helped by the services of the MORENT Application. Morent has a low...",
    image: "/mateen.jpg",
  },
  {
    id: 3,
    name: "Skylar Dias",
    role: "CEO at Amazon",
    date: "20 July 2022",
    rating: 4,
    review:
      "We are greatly helped by the services of the MORENT Application. Morent has a low...",
    image: "/mateen.jpg",
  },
];

export default function ReviewsCard() {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="mx-4 md:mx-20 bg-white shadow-md rounded-xl p-5 w-80 border">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Reviews</h2>
        <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-md font-medium">
          {reviews.length}
        </span>
      </div>

      {/* Review List */}
      {reviews.slice(0, showAll ? reviews.length : 2).map((review) => (
        <div key={review.id} className="mt-4 border-b pb-4">
          <div className="flex flex-row space-x-3">
            <Image
              src={review.image}
              alt={review.name}
              height={200}
              width={200}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold">{review.name}</h3>
              <p className="text-xs text-gray-500">{review.role}</p>
            </div>
            <span className="ml-auto text-gray-400 text-xs">{review.date}</span>
          </div>
          {/* Star Ratings */}
          <div className="flex items-center mt-2">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                size={14}
                className={
                  index < review.rating ? "text-yellow-400" : "text-gray-300"
                }
              />
            ))}
          </div>
          <p className="text-gray-600 text-sm mt-2">{review.review}</p>
        </div>
      ))}

      {/* Show All / Hide Button */}
      <button
        onClick={() => setShowAll(!showAll)}
        className="mt-4 flex items-center justify-center text-blue-500 text-sm w-full"
      >
        {showAll ? "Hide Reviews" : "Show All"}{" "}
        {showAll ? (
          <ChevronUp size={16} className="ml-1" />
        ) : (
          <ChevronDown size={16} className="ml-1" />
        )}
      </button>
    </div>
  );
}

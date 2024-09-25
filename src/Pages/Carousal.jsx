import React, { useState } from "react";
import "./Carousel.css";

// Adjust these imports based on your actual file structure and image file names
import sale1 from "../assets/sale1.png";
import sale2 from "../assets/sale2.png";
import sale3 from "../assets/sale3.png";
import sale4 from "../assets/sale4.png";
import sale5 from "../assets/sale5.png";

const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../assets', false, /\.(png|jpe?g|svg)$/));

const promotions = [
  { id: 1, image: images[0], alt: "Summer Sale" },
  { id: 2, image: images[1], alt: "New Arrivals" },
  { id: 3, image: images[2], alt: "Clearance Offer" },
  { id: 4, image: images[3], alt: "Holiday Deals" },
  { id: 5, image: images[4], alt: "Flash Sale" },
];


const PromotionCard = ({ promotion }) => (
  <div className="carousel-card">
    <img src={promotion.image} alt={promotion.alt} className="carousel-image" />
  </div>
);

export default function Carousel() {
  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % promotions.length);
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + promotions.length) % promotions.length);
  };

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">Special Offers</h2>
      <div className="carousel">
        <button onClick={prevSlide} className="carousel-arrow carousel-arrow-left">
          &#8592;
        </button>
        <div className="carousel-card-container">
          {[...promotions, ...promotions].slice(startIndex, startIndex + 3).map((promotion) => (
            <PromotionCard key={promotion.id} promotion={promotion} />
          ))}
        </div>
        <button onClick={nextSlide} className="carousel-arrow carousel-arrow-right">
          &#8594;
        </button>
      </div>
    </div>
  );
}
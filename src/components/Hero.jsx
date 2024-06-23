import React, { useEffect, useState } from "react";
import heroImage1 from "../assets/images/farm.jpg";
import heroImage2 from "../assets/images/Agro-logistics.jpg";
import heroImage3 from "../assets/images/Food-insecurity.webp";

const heroData = [
  { heroText: "Welcome to SANJARIL AGRICULTURAL FARM", heroImage: heroImage1 },
  { heroText: "Agriculture is the future", heroImage: heroImage2 },
  { heroText: "Lets Grow together", heroImage: heroImage3 },
];

const Hero = () => {
  const [currentText, setCurrentText] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => {
        return count === 2 ? 0 : count + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentText(heroData[count]);
  }, [count]);

  return (
    <section className="hero-section" id="hero">
      <img className="hero-image" src={currentText.heroImage} alt="" />
      <div className="hero-text">
        <h1>{currentText.heroText}</h1>
      </div>
    </section>
  );
};

export default Hero;

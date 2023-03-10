import React, { useState, useEffect } from "react";
import './MouseTail.css';

function MouseTail() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [gradientColor, setGradientColor] = useState("red");

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScrollY = document.body.scrollHeight - window.innerHeight;
      const percent = scrollY / maxScrollY;
      const hue = percent * 360;
      setGradientColor(`hsl(${hue}, 100%, 50%)`);
    };

    document.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="mouse-tail"
      style={{
        left: mousePosition.x,
        top: mousePosition.y,
        background: `radial-gradient(circle, ${gradientColor} 0%, transparent 70%)`,
      }}
    ></div>
  );
}

export default MouseTail;

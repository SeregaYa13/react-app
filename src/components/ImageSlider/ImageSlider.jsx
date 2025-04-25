import { useEffect, useRef, useState } from "react";

function ImageSlider() {
  const images = [
    "https://via.placeholder.com/400/111",
    "https://via.placeholder.com/400/222",
    "https://via.placeholder.com/400/333",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef();

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timerRef.current);
  }, [images.length]);

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h2>Автослайдер</h2>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        style={{ width: "400px", height: "300px", objectFit: "cover" }}
      />
      <div style={{ marginTop: "10px" }}>
        {images.map((_, index) => (
          <span
            key={index}
            style={{
              display: "inline-block",
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: currentIndex === index ? "blue" : "gray",
              margin: "0 5px",
              cursor: "pointer",
            }}
            onClick={() => {
              clearInterval(timerRef.current);
              setCurrentIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;

import { useEffect, useState } from "react";

const ImageGallery = () => {
  const images = [
    "https://via.placeholder.com/300/1",
    "https://via.placeholder.com/300/2",
    "https://via.placeholder.com/300/3",
    "https://via.placeholder.com/300/4",
    "https://via.placeholder.com/300/5",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Автопрокрутка
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Галерея</h2>
      <img
        src={images[currentIndex]}
        alt={`Изображение ${currentIndex + 1}`}
        style={{ maxWidth: "100%", height: "300px" }}
      />
      <div>
        <button onClick={prevImage}>Назад</button>
        <span>
          {" "}
          {currentIndex + 1}/{images.length}{" "}
        </span>
        <button onClick={nextImage}>Вперед</button>
      </div>
    </div>
  );
};

export default ImageGallery;

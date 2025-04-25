import { useEffect, useState } from "react";

const SimpleTimer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  const startTimer = () => setIsActive(true);
  const pauseTimer = () => setIsActive(false);
  const resetTimer = () => {
    setIsActive(false);
    setSeconds(0);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Таймер: {seconds} сек</h2>
      <button onClick={startTimer} disabled={isActive}>
        Старт
      </button>
      <button onClick={pauseTimer} disabled={!isActive}>
        Пауза
      </button>
      <button onClick={resetTimer}>Сброс</button>
    </div>
  );
};

export default SimpleTimer;

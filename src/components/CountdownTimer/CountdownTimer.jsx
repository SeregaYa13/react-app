import { useEffect, useState } from "react";

function CountdownTimer() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    } else if (seconds === 0 && isActive) {
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const handleStart = () => {
    setIsActive(true);
  };

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h2>Таймер обратного отсчёта</h2>
      <input
        type="number"
        value={seconds}
        onChange={(e) => setSeconds(Number(e.target.value))}
        placeholder="Введите секунды"
      />
      <button onClick={handleStart} disabled={isActive || seconds <= 0}>
        Старт
      </button>
      <div style={{ fontSize: "24px", marginTop: "10px" }}>
        {seconds > 0 ? seconds : "Время вышло!"}
      </div>
    </div>
  );
}

export default CountdownTimer;

import { useEffect, useRef, useState } from "react";

const PomodoroTimer = () => {
  const [workTime, setWorkTime] = useState(25 * 60); // 25 минут в секундах
  const [breakTime, setBreakTime] = useState(5 * 60); // 5 минут в секундах
  const [timeLeft, setTimeLeft] = useState(workTime);
  const [isActive, setIsActive] = useState(false);
  const [isWorkTime, setIsWorkTime] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    let interval;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      audioRef.current.play();
      setIsWorkTime(!isWorkTime);
      setTimeLeft(isWorkTime ? breakTime : workTime);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft, isWorkTime, workTime, breakTime]);

  const startTimer = () => setIsActive(true);
  const pauseTimer = () => setIsActive(false);
  const resetTimer = () => {
    setIsActive(false);
    setIsWorkTime(true);
    setTimeLeft(workTime);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Pomodoro Timer</h2>
      <div>
        <label>
          Работа (мин):
          <input
            type="number"
            value={workTime / 60}
            onChange={(e) => setWorkTime(e.target.value * 60)}
            disabled={isActive}
          />
        </label>
        <label>
          Перерыв (мин):
          <input
            type="number"
            value={breakTime / 60}
            onChange={(e) => setBreakTime(e.target.value * 60)}
            disabled={isActive}
          />
        </label>
      </div>
      <div style={{ fontSize: "2rem", margin: "20px" }}>
        {formatTime(timeLeft)}
      </div>
      <div>
        <button onClick={startTimer} disabled={isActive}>
          Старт
        </button>
        <button onClick={pauseTimer} disabled={!isActive}>
          Пауза
        </button>
        <button onClick={resetTimer}>Сброс</button>
      </div>
      <audio
        ref={audioRef}
        src="https://assets.mixkit.co/sfx/preview/mixkit-alarm-digital-clock-beep-989.mp3"
      />
    </div>
  );
};

export default PomodoroTimer;

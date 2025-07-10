import { useEffect, useState, useRef } from "react";
import { UseTimer } from "@/types"; 

const useTimer = (initialTime: number = 0): UseTimer => {
  const [time, setTime] = useState<number>(initialTime);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const savedTime = useRef<number>(initialTime); 

  const start = (newTime?: number | string) => {
    const validTime = parseInt(String(newTime || savedTime.current));
    if (!isNaN(validTime) && validTime > 0) {
      setTime(validTime);
      savedTime.current = validTime;
      setIsRunning(true);
    }
  };

  const pause = (): void => {
    setIsRunning(false);
  };

  const reset = (): void => {
    setIsRunning(false);
    setTime(savedTime.current);
  };

  useEffect(() => {
    let id: NodeJS.Timeout;

    if (isRunning && time > 0) {
      id = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    } else if (time === 0) {
      setIsRunning(false);
    }

    return () => clearInterval(id);
  }, [isRunning, time]);

  return { time, isRunning, start, pause, reset };
};

export default useTimer;

import { useState, useRef, useEffect } from "react";

export const MutableRef = () => {
  const [timer, setTimer] = useState(0);
  const innterValRef = useRef<number | null>(null);

  const stopTimer = () => {
    if (innterValRef.current) window.clearInterval(innterValRef.current);
  };
  useEffect(() => {
    innterValRef.current = window.setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
    return () => {
      stopTimer();
    };
  }, []);

  return (
    <div>
      HookTimer- {timer} -
      <button onClick={() => stopTimer()}>Stop Timer</button>
    </div>
  );
};

"use client";

import { useTimer } from "@/hooks";
import { useState } from "react";

 const TimerComponent=()=> {
 const [input, setInput] = useState<string>(""); 
  const { time, isRunning, start, pause, reset } = useTimer();

  const handleStart = () => {
    start(input);
  };
  return (
    <div>
      <h2 style={{ display:"flex",justifyContent:"center",alignItems:"center", marginBottom: "10px" }}>CountDown In Sec</h2>

      <div style={{ display:"flex",justifyContent:"center",alignItems:"center",fontSize: "24px", marginBottom: "10px" }}>
        {time !== null ? time : "--"}
      </div>
<div style={{ display:"flex",justifyContent:"center",alignItems:"center",marginBottom: "10px" }}>
      <input 
        type="number"
        placeholder="Enter time in seconds"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={isRunning}
   
      />
      </div>
      <div style={{ display:"flex",justifyContent:"center",alignItems:"center",fontSize: "24px", marginBottom: "10px" }}>
        <button onClick={handleStart} disabled={isRunning}>Start</button>
        <button onClick={pause} disabled={!isRunning}>Pause</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default TimerComponent;
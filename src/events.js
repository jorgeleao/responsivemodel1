import React, { useEffect, useState } from "react";
import "./events.css"

let interval = undefined;

function Events() {
  const [running, setRunning] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (running) {
      interval = setInterval(() => {
        setProgress((prev) => prev + 1.);
      }, 1000);
    } else {
      clearInterval(interval);
      setProgress(0);
    }
  }, [running]);

  useEffect(() => {
    console.log('=== progress='+progress)
    if(progress>100) setProgress(0)
  }, [progress]);

  return (
    <div className="Events">
      <br/>
      Lista mensal de eventos: janeiro de 2023
      <br/>
      <br/>
    </div>
  );
  }
  
export default Events;
  
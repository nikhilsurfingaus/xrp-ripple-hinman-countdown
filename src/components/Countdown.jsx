import { useEffect, useState } from "react";
import './Countdown.css';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flipper-countdown mt-5">
      <div className="flipper">
        <div className="flipper-inner">
          <span className="number">{timeLeft.days}</span>
          <span className="label">Days</span>
        </div>
        <div className="flipper-inner">
          <span className="number">{timeLeft.hours}</span>
          <span className="label">Hours</span>
        </div>
        <div className="flipper-inner">
          <span className="number">{timeLeft.minutes}</span>
          <span className="label">Minutes</span>
        </div>
        <div className="flipper-inner">
          <span className="number">{timeLeft.seconds}</span>
          <span className="label">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;

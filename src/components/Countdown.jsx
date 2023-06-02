import { useEffect, useState } from "react";
import './Countdown.css';

const Countdown = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2023-06-13T12:00:00+04:00") - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

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

import React, { useState, useEffect } from "react";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdownDate = new Date("August 17, 2023 00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });

      if (distance < 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-4">
      <div className="text-center">
        <p className="font-bold text-2xl text-lightRed md:text-3xl lg:text-4xl">{timeLeft.days}</p>
        <p className="text-sm font-bold text-gray-700">Days</p>
      </div>
      <div className="text-center">
        <p className="font-bold text-2xl text-lightRed md:text-3xl lg:text-4xl">{timeLeft.hours}</p>
        <p className="text-sm font-bold text-gray-700">Hours</p>
      </div>
      <div className="text-center">
        <p className="font-bold text-2xl text-lightRed md:text-3xl lg:text-4xl">{timeLeft.minutes}</p>
        <p className="text-sm font-bold text-gray-700">Minutes</p>
      </div>
      <div className="text-center">
        <p className="font-bold text-2xl text-lightRed md:text-3xl lg:text-4xl">{timeLeft.seconds}</p>
        <p className="text-sm font-bold text-gray-700">Seconds</p>
      </div>
    </div>
  );
};

export default Timer;

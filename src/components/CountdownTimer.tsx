
import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 12, minutes: 0, seconds: 0 }; // Reset
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center mb-8">
      <p className="text-xl text-gray-300 mb-6">Offer ends in</p>
      <div className="flex justify-center space-x-4">
        <div className="bg-orange-500 rounded-lg p-6 w-28 h-32 flex flex-col items-center justify-center">
          <div className="text-3xl font-bold text-white">{String(timeLeft.hours).padStart(2, '0')}</div>
          <div className="text-sm text-orange-100 mt-2">Hours</div>
        </div>
        <div className="bg-orange-500 rounded-lg p-6 w-28 h-32 flex flex-col items-center justify-center">
          <div className="text-3xl font-bold text-white">{String(timeLeft.minutes).padStart(2, '0')}</div>
          <div className="text-sm text-orange-100 mt-2">Minutes</div>
        </div>
        <div className="bg-orange-500 rounded-lg p-6 w-28 h-32 flex flex-col items-center justify-center">
          <div className="text-3xl font-bold text-white">{String(timeLeft.seconds).padStart(2, '0')}</div>
          <div className="text-sm text-orange-100 mt-2">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;

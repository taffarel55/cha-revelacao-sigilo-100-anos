import { useEffect, useState } from "react";

const useCountdown = (targetDate) => {
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {

  if (countDown < 0) {
    return { month: 0, day: 0, hour: 0, minute: 0, second: 0 };
  }

  var values = {};
  const rules = {
    month: 1000 * 60 * 60 * 24 * 30,
    day: 1000 * 60 * 60 * 24,
    hour: 1000 * 60 * 60,
    minute: 1000 * 60,
    second: 1000,
  };

  Object.keys(rules).forEach(function (key) {
    values[key] = Math.floor(countDown / rules[key]);
    countDown -= values[key] * rules[key];
  });

  return values;
};

export { useCountdown };

import React, { useCallback, useEffect, useState } from "react";

const SECOND = 1000;
const MINUTES = SECOND * 60;
const TIMEOUT_MINUTES = 30 * MINUTES;

const useTimeOut = () => {
  const [timeOut, setTimeOut] = useState<number>(TIMEOUT_MINUTES);

  useEffect(() => {
    document.body.addEventListener(
      "click",
      () => {
        setTimeOut(TIMEOUT_MINUTES);
      },
      true
    );
    document.body.addEventListener(
      "keydown",
      () => {
        setTimeOut(TIMEOUT_MINUTES);
      },
      true
    );

    const timer = setInterval(() => {
      setTimeOut((time) => time - 1000);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (timeOut === 0) {
      alert("로그아웃!");
    }
  }, [timeOut]);

  const minutes = Math.floor(timeOut / MINUTES);

  return {
    minutes,
    second: (timeOut - minutes * MINUTES) / SECOND,
  };
};

export default useTimeOut;

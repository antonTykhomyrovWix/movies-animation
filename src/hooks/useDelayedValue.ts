import {useEffect, useState} from 'react';

export const useDelayedValue = <T>(value: T, delay: number) => {
  const [delayedValue, setDelayedValue] = useState(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => setDelayedValue(value), delay);

    return () => clearTimeout(timeoutId);
  }, [delay, value]);

  return delayedValue;
};

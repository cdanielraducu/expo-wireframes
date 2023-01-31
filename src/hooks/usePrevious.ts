import { useEffect, useRef } from 'react';

export default function usePrevious<T>(value: T) {
  const previousValue = useRef(value);

  useEffect(() => {
    previousValue.current = value;
  }, [value]);

  return previousValue.current;
}

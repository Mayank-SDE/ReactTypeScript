import { useEffect, useRef, useState } from 'react';
import { Timer as TimerProps, useTimersContext } from '../store/timers-context.tsx';
import Container from './UI/Container.tsx';


export default function Timer({ name, duration }: TimerProps) {


  const interval = useRef<number | null>(null);

  const [remainingTime, setRemainingTime] = useState(duration * 1000);

  const { isRunning } = useTimersContext();

  if (remainingTime <= 0 && interval.current) {
    clearInterval(interval.current);
  }

  useEffect(() => {
    let timer: unknown;
    if (isRunning) {
      timer = setInterval(function () {
        setRemainingTime((prevState) => {
          if (prevState <= 0) {
            return prevState;
          }
          return prevState - 50;
        });
      }, 50);

      interval.current = timer as number;
    } else if (interval.current) {

      clearInterval(interval.current);
    }

    return () => {
      clearInterval(timer as number);
    }

  }, [isRunning]);

  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

  return (
    <Container as="article">
      <h2>{name}</h2>
      <p><progress max={duration * 1000} value={remainingTime} /></p>
      <p>{formattedRemainingTime}</p>
    </Container>
  );
}

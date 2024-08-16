'use client';

import { useEffect, useState } from 'react';

export default function useTimerState() {
  const [currentTimer, setCurrentTime] = useState('');
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const date = now.toLocaleDateString();
      const time = now.toLocaleTimeString();
      setCurrentTime(`${date} ${time}`);
    }, 1000)
    return () => clearInterval(interval);
  })

  return currentTimer;
}
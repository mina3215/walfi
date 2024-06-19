import React, { useState, useEffect } from 'react';

function Clock() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="size-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  )
}

export default function CurrentTime() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateCurrentTime = () => {
      const now = new Date();
      const date = now.toLocaleDateString();
      const time = now.toLocaleTimeString();
      setCurrentTime(`${date} ${time}`)
    };

    updateCurrentTime();

    const timer = setInterval(updateCurrentTime, 1000);

    return () => clearInterval(timer);
  }, []);

  return(
    <div className='flex items-center justify-end pb-2'>
      <Clock />
      <div className='text-gray-500 text-[12px] pl-1'>
        현재: {currentTime}
      </div>
    </div>
  )
}
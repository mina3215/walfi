'use client';

import { useRef, useState } from "react";


export function useBooleanState(initialValue: boolean):
  [boolean, { toggle: () => void; on: () => void; off: () => void }] {
  const [value, setValue] = useState(initialValue);

  const updateValue = useRef({
    toggle: () => setValue(oldValue => !oldValue),
    on: () => setValue(true),
    off: () => setValue(false)
  })


  return [value, updateValue.current];
}



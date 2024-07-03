'use client'

import clsx from "clsx";
import { useSearchParams} from "next/navigation";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
}

export default function SearchBar({ className, children, placeholder}: InputProps) {
  const searchParams = useSearchParams();
  
  function handleSearch(term: string) {
    console.log(term);
  }

  return (
    <>
      <input
        name='searchbar'
        className={clsx(
          'peer block pl-10 text-sm placeholder:text-gray-500',
          className)}
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('query')?.toString()}
      />
      {children && children}
    </>
  )
}
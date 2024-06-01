'use client'
import {
  StarIcon,
  Cog6ToothIcon as SettingIcon,
  MagnifyingGlassIcon as SearchIcon
} from '@heroicons/react/24/outline';

import { useBooleanState } from '@/hooks/useBooleanState';
import SearchBar from './searchbar';

export default function IconsWrapper() {
  return (
    <div className='relative flex flex-row'>
      <Star />
      <Setting />
      <Search />
    </div>
  )
}

function Star() {
  const [isCheck, setCheck] = useBooleanState(false);

  return (
    <>
      <StarIcon className='w-6 cursor-pointer' onClick={setCheck.toggle} />
    </>
  )
}

function Setting() {
  return (
    <>
      <SettingIcon className='w-6 cursor-pointer' />
    </>
  )
}

function Search() {
  const [isShow, setShow] = useBooleanState(false);
  return (
    <>
      <SearchIcon className='w-6 cursor-pointer' onClick={setShow.toggle} />
      {isShow && <SearchBar placeholder='검색어를 입력하세요' />}
    </>
  )
}
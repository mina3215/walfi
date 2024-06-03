'use client'
import {
  StarIcon,
  XMarkIcon,
  Cog6ToothIcon as SettingIcon,
  MagnifyingGlassIcon as SearchIcon,
} from '@heroicons/react/24/outline';

import { useBooleanState } from '@/hooks/useBooleanState';
import { ModalSearch } from '../modals';

export default function IconsWrapper() {
  return (
    <div className='flex flex-row '>
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
      <StarIcon className='w-4 cursor-pointer' onClick={setCheck.toggle} />
    </>
  )
}

function Setting() {
  return (
    <>
      <SettingIcon className='w-4 cursor-pointer' />
    </>
  )
}

function Search() {
  const [isShow, setShow] = useBooleanState(false);
  return (
    <>
      {isShow ?
        <XMarkIcon className='w-4 cursor-pointer z-10  border-x border-t bg-white' onClick={setShow.toggle} />
        : <SearchIcon className='w-4 cursor-pointer' onClick={setShow.toggle} />
      }
      {isShow && <ModalSearch />}
    </>
  )
}
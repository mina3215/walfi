'use client'
import {
  StarIcon,
  XMarkIcon,
  Cog6ToothIcon as SettingIcon,
  MagnifyingGlassIcon as SearchIcon,
} from '@heroicons/react/24/outline';

import { useBooleanState } from '@/hooks/useBooleanState';
import { ModalSearch } from '../modals';
import clsx from 'clsx';

export default function IconsWrapper() {
  return (
    <div className='flex justify-around w-32 h-14'>
      <Star />
      <Setting />
      <Search />
    </div>
  )
}

function Star() {
  const [isCheck, setCheck] = useBooleanState(false);

  return (
    <div className='content-center w-9'>
      <StarIcon className='w-8 cursor-pointer' onClick={setCheck.toggle} />
    </div>
  )
}

function Setting() {
  return (
    <div className='content-center w-9'>
      <SettingIcon className='w-8 cursor-pointer' />
    </div>
  )
}

function Search() {
  const [isShow, setShow] = useBooleanState(false);

  return (
    <div className='content-center w-9'>
      <div className={clsx('relative z-10 w-9 h-12 content-center bg-white', isShow && 'border-x border-t')}>
        {isShow ?
          <XMarkIcon className='w-8 cursor-pointer' onClick={setShow.toggle} />
          : <SearchIcon className='w-8 cursor-pointer' onClick={setShow.toggle} />
        }
      </div>
      {isShow && <ModalSearch />}
    </div>
  )
}
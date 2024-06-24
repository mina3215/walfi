'use client';

import {
  StarIcon,
  XMarkIcon,
  Cog6ToothIcon as SettingIcon,
  MagnifyingGlassIcon as SearchIcon,
} from '@heroicons/react/24/outline';

import { useBooleanState } from '@/hooks/useBooleanState';
import clsx from 'clsx';
import ModalSearch from '../modals';


function Star() {
  const [isCheck, setCheck] = useBooleanState(false);

  return (
    <div className='content-center w-9'>
      <StarIcon className={clsx('w-8 cursor-pointer', isCheck && 'fill-yellow-200')} onClick={setCheck.toggle} />
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

export default function IconsWrapper() {
  return (
    <div>
      <div className='static flex justify-around w-32 h-14'>
        <Star />
        <Setting />
        <Search />
      </div>
    </div>
  )
}
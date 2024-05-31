'use client'
import {
  StarIcon,
  Cog6ToothIcon as SettingIcon,
  MagnifyingGlassIcon as SearchIcon
} from '@heroicons/react/24/outline';

import { useBooleanState } from '@/hooks/useBooleanState';

export default function IconsWrapper() {
  return (
    <div className='relative flex flex-row'>
      <IconStar />
      <IconSetting />
      <IconSearch />
    </div>
  )
}

function IconStar() {
  const [isCheck, setCheck] = useBooleanState(false);

  return (
    <>
      <StarIcon className='w-6 cursor-pointer' onClick={setCheck.toggle} />
    </>
  )
}

function IconSetting() {
  return (
    <>
      <SettingIcon className='w-6 cursor-pointer' />
    </>
  )
}

function IconSearch() {
  return (
    <>
      <SearchIcon className='w-6 cursor-pointer' />
    </>
  )
}
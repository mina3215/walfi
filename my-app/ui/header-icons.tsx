import { 
  StarIcon,
  Cog6ToothIcon as SettingIcon,
  MagnifyingGlassIcon as SearchIcon
}from '@heroicons/react/24/outline';

export default function HeaderWarraper(){
  return(
    <div className='flex-row'>
      <IconStar/>
      <IconSetting/>
      <IconSearch/>
    </div>
  )
}

function IconStar(){
  
  return(
    <>
      <StarIcon className='px-[44]'/>
    </>
  )
}

function IconSetting(){
  return(
    <>
      <SettingIcon/>
    </>
  )
}

function IconSearch(){
  return(
    <>
      <SearchIcon/>
    </>
  )
}
import { useBooleanState } from '@/hooks/useBooleanState';
import { MenuProps } from '@/types/menuprops';
import Link from 'next/link';
import { isMenuPropsArray } from '@/utils/checktypes'

interface MyComponentProps {
  sublinks: MenuProps[];
}

export function DropMenu({ sublinks }: MyComponentProps) {
  return (
    <div className='absolute border left-0 w-screen top-[96px]'>
      <div className='w-[1080px] mx-auto flex flex-row'>
        {sublinks.map((link) => {
          return (
            <div className='w-[250px] my-10'>
              <Link
                key={link.name}
                href={link.href}
              >
                <p className='hover:text-orange-700 hover:underline'>{link.name}</p>
                {link.list && <SubMenu sublinks={link.list} />}
              </Link>
            </div>)
        })
        }
      </div>
    </div>
  )
}

function SubMenu({ sublinks }: MyComponentProps) {
  return (
    <div>
      {sublinks.map((link, idx) => {
        return (
          <div className='mt-1'>
            <Link
              key={link.name}
              href={link.href}
            >
              <p className='mt-1 font-medium hover:text-orange-700 hover:underline'>{link.name}</p>
            </Link>
          </div>
        )
      })}
    </div>
  )
}
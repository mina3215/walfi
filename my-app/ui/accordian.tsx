import { useBooleanState } from '@/hooks/useBooleanState';
import { MenuProps } from '@/types/menu-list';
import Link from 'next/link';

interface MyComponentProps {
  sublinks: MenuProps[] | string[];
}

function isMenuPropsArray(arr: any[]): arr is MenuProps[] {
  return arr.every(item => typeof item !== 'string' && 'name' in item && 'href' in item);
}

export function DropMenu({ sublinks }: MyComponentProps) {
  if (!isMenuPropsArray(sublinks)) {
    console.error('Invalid sublinks format');
    return null;
  }

  console.log(sublinks[0].name);

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
                <SubMenu sublinks={link.list} />
                <p>{link.name}</p>
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
            <p>
              {link}
            </p>
          </div>
        )
      })}
    </div>
  )
}
import { MenuProps } from '@/types/menuprops';
import Link from 'next/link';

interface MyComponentProps {
  sublinks: MenuProps[];
}

function SubMenu({ sublinks }: MyComponentProps) {
  return (
    <div>
      {sublinks.map((link) => 
          <div key={link.name} className='mt-1'>
            <Link
              key={link.name}
              href={link.href}
            >
              <p className='mt-1 font-medium hover:text-orange-700 hover:underline'>{link.name}</p>
            </Link>
          </div>
        )
      }
    </div>
  )
}

export default function DropMenu({ sublinks }: any) {
  return (
    <div className='absolute z-10 w-full mx-auto bg-white'>
      <div className='w-[1080px] mx-auto flex flex-row'>
        {
          sublinks.map(link => 
            <div key={link.name} className='w-[250px] my-10'>
              <Link
                key={link.name}
                href={link.href}
              >
                <p className='hover:text-orange-700 hover:underline'>{link.name}</p>
              </Link>
                {link.list && <SubMenu sublinks={link.list} />}
            </div>
          )
        }
      </div>
    </div>
  )
}

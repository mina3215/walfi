'use client';

import style from '@/ui/global.module.css';
import SideNavLink from '@/ui/sidenav-link';
import { SideNavProps } from '@/types/menuprops';

export default function SideNav({ title, links }: SideNavProps) {
  return (
    <div className='py-20'>
      <div className='pb-2'>
        <div className={style.category}>
          <div className='text-gray-500 text-lg font-semibold'>
            {title}
          </div>
        </div>
      </div>
      <div className='pt-2'>
        <div className={style.category}>
          {links.map((link) => (
            <SideNavLink key={link.name} link={link} />
          ))}
        </div>
      </div>
    </div>
  )
}
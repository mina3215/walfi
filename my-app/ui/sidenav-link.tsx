import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

interface SideNavLinkProps {
  link: {
    name: string;
    href: string;
  };
}

export default function SideNavLink({ link }: SideNavLinkProps) {
  const pathname = usePathname();

  return (
    <div>
      <Link
        href={link.href}
        className={clsx(
          'text-sm',
          pathname === link.href ? 'text-blue-400' : 'text-gray-500',
        )}
      >{link.name}</Link>
    </div>
  );
}
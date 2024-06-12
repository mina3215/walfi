// Header Nav

export interface MenuProps {
  name: string,
  href: string,
  list?: MenuProps[],
}

// Side Nav

export interface SideNavLinkProps {
  link: {
    name: string;
    href: string;
  };
}

export interface Link {
  name: string;
  href: string;
}

export interface SideNavProps {
  title: string;
  links: Link[];
}
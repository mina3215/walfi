export interface MenuProps {
  name: string,
  href: string,
  list?: MenuProps[] | string[]
  id?: number,
}

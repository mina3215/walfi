import { MenuProps } from '@/types/menu-list';

function isMenuPropsArray(arr: any[]): arr is MenuProps[] {
  return arr.every(item => typeof item !== 'string' && 'name' in item && 'href' in item);
}
import { MenuProps } from '@/types/menuprops';

/**
 * MenuProps check
 */
export function isMenuPropsArray(arr: any[]): arr is MenuProps[] {
  console.log(arr);
  return arr.some(item => typeof item !== 'string' && 'name' in item && 'href' in item);
}

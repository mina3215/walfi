import { useQuery } from '@tanstack/react-query';
import queryOptions from './productService';

// getProductAll
export function useProduct() {
  return useQuery(queryOptions.all());
}

export function useDetailProduct(id:number) {
  return useQuery(queryOptions.detail(id))
}

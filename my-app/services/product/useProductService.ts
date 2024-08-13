import { useQuery } from '@tanstack/react-query';
import queryOptions from './productService';

// getProductAll
export default function useProduct() {
  return useQuery(queryOptions.all());
}
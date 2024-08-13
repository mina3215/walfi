import { useQuery } from '@tanstack/react-query';
import queryOptions from './accountService';

// getProductAll
export default function useAccount(currency:string) {
  return useQuery(queryOptions.currency(currency));
}
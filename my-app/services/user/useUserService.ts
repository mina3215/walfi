import { useQuery} from '@tanstack/react-query';
import queryOptions from './userService';

// getProductAll
export default function useUserInfo() {
  return useQuery(queryOptions.detail('userid'));
}
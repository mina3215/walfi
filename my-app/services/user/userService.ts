import { requestGet, requestPost } from '@/utils/http-common'

const queryKeys = {
  all: ['user'] as const,
  detail: (productName: string) => [...queryKeys.all, productName] as const
}

const queryOptions = {
  all: () => ({
    queryKey: queryKeys.all,
    queryFn: () => requestGet('/user')
  }),
  detail: (userId: string) => ({
    queryKey: queryKeys.detail(userId),
    queryFn: () => requestGet('/user/userinfo'),
    staleTime: 10 * 60 * 1000,
  })
}

export default queryOptions;
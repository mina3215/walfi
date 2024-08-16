import { requestGet } from '@/utils/http-common'

const queryKeys = {
  all: ['product'] as const,
  detail: (id: number) => [...queryKeys.all, id] as const
}

const queryOptions = {
  all: () => ({
    queryKey: queryKeys.all,
    queryFn: () => requestGet('/product'),
    staleTime: 10 * 60 * 1000,
  }),
  detail: (id:number) => ({
    queryKey: queryKeys.detail(id),
    queryFn: () => requestGet(`/product/${id}`),
    staleTime: 10 * 60 * 1000,
  })
}

export default queryOptions;
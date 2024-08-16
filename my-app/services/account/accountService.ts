import { requestGet } from '@/utils/http-common'

const queryKeys = {
  all: ['account'] as const,
  detail: (productName: String) => [...queryKeys.all, productName] as const,
  currency: (currency:string) => [...queryKeys.all, currency] as const
}

const queryOptions = {
  all: () => ({
    queryKey: queryKeys.all,
    queryFn: () => requestGet('/account'),
    staleTime: 10 * 60 * 1000,
  }),
  currency: (currency:string) => ({
    queryKey: queryKeys.currency(currency),
    queryFn: () => requestGet(`/account/currency/?currency=${currency}`),
    staleTime: 10 * 60 * 1000,
  })
}

export default queryOptions;
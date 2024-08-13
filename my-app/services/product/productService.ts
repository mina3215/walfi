import { requestGet } from '@/utils/http-common'

const queryKeys = {
  all: ['product'] as const,
  detail: (productName: String) => [...queryKeys.all, productName] as const
}

const queryOptions = {
  all: () => ({
    queryKey: queryKeys.all,
    queryFn: () => requestGet('/product')
  })
}

export default queryOptions;
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'
import { login } from '../api/apiHelper'

export const useLoginQuery = (data, onSuccess, onError) => {
    const mutation = useMutation({
      mutationKey: ['loginKey'],
      mutationFn: (data) => login(data), 
      onSuccess,
      onError
    })
    return mutation;
}
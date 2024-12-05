import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'
import { login } from '../api/apiHelper'
import { updateUserData } from '../api/apiHelper';
import { addressData } from '../api/apiHelper';
import { sendOtpCode, dataHistorial } from '../api/apiHelper';


export const useLoginQuery = (onSuccess, onError) => {
    const mutation = useMutation({
      mutationKey: ['loginKey'],
      mutationFn: (data) => login(data), 
      onSuccess,
      onError,
    })
    return mutation;
}

export const useUpdateUserQuery = (onSuccess, onError) => {
  const mutation = useMutation({
    mutationKey: ['updateUserData'], 
    mutationFn: updateUserData, 
    onSuccess, 
    onError,   
  });
  return mutation;
};

export const useCreateAddress = (onSuccess, onError) => {
  const mutation = useMutation({
    mutationKey: ['addressData'], 
    mutationFn: addressData, 
    onSuccess, 
    onError,   
  });
  return mutation;
};

export const useSendOTPCode = (onSuccess, onError) => {
  const mutation = useMutation({
    mutationKey: ['sendOtpCode'], 
    mutationFn: sendOtpCode, 
    onSuccess, 
    onError,   
  });
  return mutation;
};

export const useUpdateHistorial = (onSuccess, onError) => {
  const mutation = useMutation({
    mutationKey: ['dataHistorial'], 
    mutationFn: dataHistorial, 
    onSuccess, 
    onError,   
  });
  return mutation;
};
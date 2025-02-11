import { useQuery, useMutation } from '@tanstack/react-query'
import {
  login,
  updateUserData,
  addressData,
  sendOtpCode,
  dataHistorial,
  fetchSecureEmail,
  verifyEmail,
  resendOtpCodeEmail,
  sendOtpCodePhoneNumber,
  fetchSecurePhone,
  verifyPhoneNumber,
  resendOtpCodePhoneNumber,
  generateToken,
  createValidation,
  createUser,
  validationStepFAD,
  sendFiles
} from '../api/apiHelper';


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
    mutationFn: (data) => updateUserData(data),
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
    mutationFn: (data) => dataHistorial(data),
    onSuccess,
    onError,
  });
  return mutation;
};

export const useSecureEmailQuery = (onSuccess, onError) => {
  const query = useQuery({
      queryKey: ['secureEmail'],
      queryFn: fetchSecureEmail,
      onSuccess,
      onError,
  });
  return query;
};

export const useVerifyEmail = (onSuccess, onError) => {
  const mutation = useMutation({
      mutationKey: ['verifyEmail'],
      mutationFn: verifyEmail,
      onSuccess,
      onError,
  });
  return mutation;
};

export const useResendOtpEmail = (onSuccess, onError) => {
  const mutation = useMutation({
      mutationKey: ['resendOtpCodeEmail'],
      mutationFn: resendOtpCodeEmail,
      onSuccess,
      onError,
  });
  return mutation;
};

export const useSendOtpPhone = (onSuccess, onError) => {
  const mutation = useMutation({
      mutationKey: ['sendOtpCodePhoneNumber'],
      mutationFn: sendOtpCodePhoneNumber,
      onSuccess,
      onError,
  });
  return mutation;
};

export const useSecurePhoneQuery = (onSuccess, onError) => {
  const query = useQuery({
      queryKey: ['securePhone'],
      queryFn: fetchSecurePhone,
      onSuccess,
      onError,
  });
  return query;
};

export const useVerifyPhone = (onSuccess, onError) => {
  const mutation = useMutation({
      mutationKey: ['verifyPhoneNumber'],
      mutationFn: verifyPhoneNumber,
      onSuccess,
      onError,
  });
  return mutation;
};

export const useResendOtpPhone = (onSuccess, onError) => {
  const mutation = useMutation({
      mutationKey: ['resendOtpCodePhoneNumber'],
      mutationFn: resendOtpCodePhoneNumber,
      onSuccess,
      onError,
  });
  return mutation;
};

export const useGenerateToken = (onSuccess, onError) => {
  const mutation = useMutation({
      mutationKey: ['generateToken'],
      mutationFn: generateToken,
      onSuccess,
      onError,
  });
  return mutation;
};

export const useCreateValidation = (onSuccess, onError) => {
  const mutation = useMutation({
      mutationKey: ['createValidation'],
      mutationFn: createValidation,
      onSuccess,
      onError,
  });
  return mutation;
};

export const useCreateUser = (onSuccess, onError) => {
  const mutation = useMutation({
      mutationKey: ['createUseer'],
      mutationFn: (data) => createUser(data),
      onSuccess,
      onError,
  });
  return mutation;
};

export const useValidationStepFAD = (onSuccess, onError, isEnabled = true) => {
  return useQuery({
    queryKey: ['validationStepFAD'],
    queryFn: validationStepFAD,
    retry: false,
    staleTime: Infinity,
    cacheTime: Infinity,
    enabled: isEnabled,
    onSuccess,
    onError,
  });
};

export const useSendFiles = (onSuccess, onError) => {
  const mutation = useMutation({
      mutationKey: ['sendFiles'],
      mutationFn: sendFiles,
      onSuccess,
      onError,
  });
  return mutation;
};


import axios from 'axios';
import { endpoint } from '../Config/utils/urls';

export function login(data){
    return axios.post(endpoint.usuarios.login, data, { withCredentials: true });
} 

export function updateUserData(data) {
    console.log('data on apiHelper: ', data)
    return  axios.post(endpoint.usuarios.updateDataUser, data, {withCredentials:true});
  }

export function addressData(data){
    return axios.post(endpoint.direccion.createDireccion,data, {withCredentials:true});
}

export function sendOtpCode(data){
    return axios.post(endpoint.verificacion.sendOTPCodeEmail,data, {withCredentials:true});
}

export function dataHistorial(data){
    return axios.post(endpoint.historial.updateDataHistorial,data, {withCredentials:true});
}

//Para Verificación de correo
export function fetchSecureEmail() {
    return axios.get(endpoint.usuarios.getSecureEmailUser, { withCredentials: true });
}

export function verifyEmail(data) {
    return axios.post(endpoint.verificacion.verifyEmail, data, { withCredentials: true });
}

export function resendOtpCodeEmail() {
    return axios.post(endpoint.verificacion.resendOTPCodeEmail, {}, { withCredentials: true });
}

export function sendOtpCodePhoneNumber() {
    return axios.post(endpoint.verificacion.sendOTPCodePhoneNumber, {}, { withCredentials: true });
}

// Funciones para VerificacionTelefono
export function fetchSecurePhone() {
    return axios.get(endpoint.usuarios.getSecurePhoneUser, { withCredentials: true });
}

export function verifyPhoneNumber(data) {
    return axios.post(endpoint.verificacion.verifyPhoneNumber, data, { withCredentials: true });
}

export function resendOtpCodePhoneNumber() {
    return axios.post(endpoint.verificacion.resendOTPCodePhoneNumber, {}, { withCredentials: true });
}

export function generateToken() {
    return axios.post(endpoint.FAD.generateToken, {}, { withCredentials: true });
}

export function createValidation() {
    return axios.post(endpoint.FAD.createValidation, {}, { withCredentials: true });
}

//Para crear un usuario
export function createUser(data) {
    return axios.post(endpoint.usuarios.createUser, data, { withCredentials: true });
}
 
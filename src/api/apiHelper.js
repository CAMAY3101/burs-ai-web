import axios from 'axios';
import { endpoint } from '../Config/utils/urls';

export function login(data){
    return axios.post(endpoint.usuarios.login, data, { withCredentials: true });
}

export function updateUserData(data) {
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

//Funciones para verificar FAD
export function validationStepFAD(){
    return axios.get(endpoint.FAD.getValidationStep, { withCredentials: true });
}

//Para crear un usuario
export function createUser(data) {
    return axios.post(endpoint.usuarios.createUser, data, { withCredentials: true });
}

//Sección de administración de usuarios
export function adminGetAllUsers() {
    return axios.get(endpoint.usuarios.adminGetAllUsers, { withCredentials: true });
}

export function adminGetUser(uuid) {
    return axios.get(`${endpoint.usuarios.adminGetUser}/${uuid}`, { withCredentials: true });
}

export function adminCreateUser(data) {
    return axios.post(endpoint.usuarios.adminCreateUser, data, { withCredentials: true });
}

export function adminUpdateUser(uuid, data) {
    return axios.put(`${endpoint.usuarios.adminUpdateUser}/${uuid}`, data, { withCredentials: true });
}

export function adminDeleteUser(uuid) {
    return axios.delete(`${endpoint.usuarios.adminDeleteUser}/${uuid}`, { withCredentials: true });
}

export function adminUpdateEtapaRegistro(uuid, etapa_registro) {
    return axios.put(`${endpoint.usuarios.adminUpdateEtapaRegistro}/${uuid}`, { etapa_registro }, { withCredentials: true });
}

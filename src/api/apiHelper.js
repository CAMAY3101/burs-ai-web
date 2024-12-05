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
 
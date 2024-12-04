import axios from 'axios';
import { endpoint } from '../Config/utils/urls';

export function login(data){
    return axios.post(endpoint.usuarios.login, data, { withCredentials: true });
} 
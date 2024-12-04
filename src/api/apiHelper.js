import axios from 'axios';
import { endpoint } from '../Config/utils/urls';

export function login(data){
    axios.post(endpoint.usuarios.login, data, { withCredentials: true });
} 
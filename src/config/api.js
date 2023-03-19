import axios from 'axios';
import { API_URL } from '.';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Authorization': 'Bearer ' + localStorage.getItem('token'),
    'Content-Type': 'application/json'
  }
});

export default api;
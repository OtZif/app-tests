import axios from 'axios';
import { api } from './api';

export const fetchUser = (login, pass) =>
  axios.get(`${api}/users?login=${login}&pass=${pass}`);

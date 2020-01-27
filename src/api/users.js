import axios from "axios";
import { api } from "./api";

export const fetchUsers = () => axios.get(`${api}/users`);
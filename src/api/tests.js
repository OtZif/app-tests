import axios from 'axios';
import { api } from './api';

export const fetchTests = () => axios.get(`${api}/tests`);

export const addTest = async (date, testTitle) => {
  const res = await axios.post(`${api}/tests`, {
    date,
    testTitle,
  });
  return res.data;
};

export const removeTest = (id) => axios.delete(`${api}/tests/${id}`);

export const editTestName = (id, title, date, questions) =>
  axios.put(`${api}/tests/${id}`, {
    id,
    testTitle: title,
    date,
    questions,
  });

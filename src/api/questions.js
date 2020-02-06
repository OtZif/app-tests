import axios from 'axios';
import { api } from './api';

export const fetchTestQuestion = (id) =>
  axios.get(`${api}/questions?testsId=${id}`);

export const removeQuestion = (testId, questionId) =>
  axios.delete(`${api}/questions/${questionId}?&testsId=${testId}`);

export const addNewQuestion = (payload) =>
  axios.post(`${api}/questions?testsId=${payload.testsId}`, payload);

export const edditQuestion = (
  testsId,
  questionId,
  question,
  answerType,
  answers,
) => axios.put(`${api}/questions/${questionId}?&testsId=${testsId}`, {
  testsId,
  question,
  answerType,
  answers,
});

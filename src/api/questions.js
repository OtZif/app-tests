import axios from "axios";
import { api } from "./api";

export const fetchTestQuestion = id =>
  axios.get(`${api}/tests/${id}/questions`);

export const removeQuestion = (testId, questionId) =>
  axios.delete(`${api}/tests/${testId}/questions/${questionId}`);

export const addNewQuestion = (testsId, newId, question, answerType, answers) =>
  axios.post(`${api}/tests/${testsId}/questions`, {
    newId,
    testsId,
    question,
    answerType,
    answers
  });

export const edditQuestion = (
  testsId,
  questionId,
  question,
  answerType,
  answers
) =>
  axios.put(`${api}/tests/${testsId}/questions/${questionId}`, {
    testsId,
    question,
    answerType,
    answers
  });

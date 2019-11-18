import { ADD_QUESTION, ADD_TEST } from "../constants/actionConstants"

export const addTest = (id, name) => {
  return{
    type: ADD_TEST,
    id,
    name,
  }
}

export const addQuestion = (id, question, ...answers) => {
  return {
    type: ADD_QUESTION,
    id,
    question,
    ...answers
  }
}
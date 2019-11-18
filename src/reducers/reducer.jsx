import { ADD_TEST, ADD_QUESTION } from "../constants/actionConstants";

const initialState = {
  users: [
    {
      login: "admin",
      pass: "adminpass"
    },
    {
      login: "user",
      pass: "userpass"
    }
  ],
  tests: [
    {
      id: 0,
      name: "Тест на внимательность!",
      questions: [
        {
          question: "question 1?",
          answers: ["answer 1", "answer 2", "answer 3"]
        }
      ]
    },
    {
      id: 1,
      name: "Тест на bla bla!",
      questions: [
        {
          question: "question 1?",
          answers: ["answer 1", "answer 2", "answer 3"]
        }
      ]
    }
  ]
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TEST:
      return Object.assign({}, state, {
        tests: [
          ...state.tests,
          {
            id: action.id,
            name: action.name,
            questions: []
          }
        ]
      });
    case ADD_QUESTION:
      return Object.assign({}, state, {
        ...state,
        tests: state.tests.map(el => {
          if (el.id === action.id) {
            return {
              ...el,
              [el.question]: action.question,
              [el.answers]: [...action.answers]
            };
          }
          return el;
        })
      });
    default:
      return state;
  }
};

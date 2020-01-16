import {
  ADD_TEST,
  ADD_QUESTION,
  DELETE_TEST,
  CLOSE_MODAL,
  ADDING_NEW_TEST,
  LOGIN,
  LOGOUT,
  ADMIN_LOGIN,
  AUTHORIZED,
  SET_USER_NAME,
  DELETE_QUESTION,
  SORT_BY_DATE,
  SEARCH_TEST,
  RESET_FILTER_TRACK,
  MODAL_ADD_QUESTION
} from "../constants/actionConstants";

const initialState = {
  authorized: true,
  userName: "LogIn",
  admin: true,
  modal: false,
  autorisation: false,
  modalAddQuestion: false,
  addTitle: false,
  filter: false,
  filterTrack: "",
  idTest: "",
  users: [
    {
      name: "Капитан Админ",
      login: "admin",
      pass: "admin"
    },
    {
      name: "Вася Пупкин",
      login: "user",
      pass: "userpass"
    },
    {
      name: "Валера Долгий",
      login: "user",
      pass: "user"
    }
  ],
  tests: [
    {
      id: 0,
      testTitle: "Test 1",
      date: "2020-01-10T12:32:17.728Z",
      questions: [
        {
          id: 1322,
          answerType: "radio", // radio - one currect answer, checkbox - some curr. answ., numeric - num. answer
          question: "question 1?",
          answers: [
            {
              id: 1122,
              answer: "answer 1",
              currect: false
            },
            {
              id: 1123,
              answer: "answer 2",
              currect: true
            },
            {
              id: 1124,
              answer: "answer 4",
              currect: false
            }
          ],
          currectAnswer: ["answer 2"]
        },
        {
          id: 1329, // id = (+new Date).toString(10);
          answerType: "checkbox", // 1 - one currect answer, 2 - some curr. answ., 0 - num. answer
          question: "question 2?",
          // answers: ["answer 1", "answer 2", "answer 3"],
          answers: [
            {
              id: 2122,
              answer: "answer 1",
              currect: false
            },
            {
              id: 3123,
              answer: "answer 2",
              currect: true
            },
            {
              id: 4124,
              answer: "answer 4",
              currect: false
            }
          ],
          currectAnswer: ["answer 2"]
        },
        {
          id: 1324,
          answerType: "numeric", // 1 - one currect answer, 2 - some curr. answ., 0 - num. answer
          question: "question 3?",
          answers: [
            {
              id: 1125,
              answer: "",
              currect: "223"
            }
            // {
            //   id: 1126,
            //   answer: "answer 2",
            //   currect: true
            // },
            // {
            //   id: 1127,
            //   answer: "answer 4",
            //   currect: false
            // }
          ],
          currectAnswer: ["answer 3"]
        }
      ]
    },
    {
      id: 2,
      testTitle: "Test 2",
      date: "2020-01-12T12:32:17.728Z",
      questions: []
    }
  ]
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TEST:
      return Object.assign({}, state, {
        modal: false,
        addTitle: false,
        tests: [
          ...state.tests,
          {
            id: action.id,
            testTitle: action.testTitle,
            date: action.date,
            questions: []
          }
        ]
      });
    case ADD_QUESTION:
      return Object.assign({}, state, {
        modal: false,
        modalAddQuestion: false,
        tests: state.tests.map(el => {
          if (el.id === state.idTest) {
            // console.log('reducer', action.id, action.question);
            const newId = +new Date();
            return {
              ...el,
              questions: [
                ...el.questions,
                {
                  id: newId,
                  answerType: action.answerType,
                  question: action.question,
                  answers: action.answers
                }
              ]
              //[el.answers]: [...action.answers]
            };
          }
          return el;
        }),
        idTest: ""
      });

    case DELETE_TEST:
      return Object.assign({}, state, {
        tests: state.tests.filter(el => el.id !== action.id)
      });

    case ADDING_NEW_TEST:
      return {
        ...state,
        modal: true,
        addTitle: true
      };

    case CLOSE_MODAL:
      return {
        ...state,
        modal: false,
        autorisation: false,
        addTitle: false,
        modalAddQuestion: false
      };

    case LOGIN:
      return {
        ...state,
        modal: true,
        autorisation: true
      };

    case LOGOUT:
      return {
        ...state,
        userName: "LogIn",
        admin: false,
        authorized: false
      };

    case ADMIN_LOGIN:
      return {
        ...state,
        admin: true
      };

    case AUTHORIZED:
      return {
        ...state,
        authorized: true
      };

    case SET_USER_NAME:
      return {
        ...state,
        userName: action.name
      };

    case DELETE_QUESTION:
      return Object.assign({}, state, {
        ...state,
        tests: state.tests.map(el => {
          if (el.id === action.testId) {
            return {
              ...el,
              questions: el.questions.filter(
                elem => elem.id !== action.questionId
              )
            };
          }
          return el;
        })
      });

    case SORT_BY_DATE:
      return {
        ...state,
        filter: !state.filter
      };

    case SEARCH_TEST:
      return {
        ...state,
        filterTrack: action.text
      };

    case RESET_FILTER_TRACK:
      return {
        ...state,
        filterTrack: ""
      };

    case MODAL_ADD_QUESTION:
      return {
        ...state,
        modal: true,
        modalAddQuestion: true,
        idTest: action.idTest
      };

    default:
      return state;
  }
};

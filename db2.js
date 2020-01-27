let x = [
  {
    id: 1322,
    testsId: 1,
    answerType: "Single",
    question: " Test-1-question 1?",
    answers: [
      {
        id: 1122,
        answer: "answer 1",
        currect: true
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
    ]
  },
  {
    id: 1329,
    testsId: 1,
    answerType: "Some",
    question: "TEST-1-question 2?",
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
    ]
  },
  {
    id: 1324434354,
    testsId: 1,
    answerType: "Numeric",
    question: "TETS-1-question 3?",
    answers: [
      {
        id: 1125,
        answer: "",
        currect: "223"
      }
    ]
  }
];

let y = x.map(el => {
  return {
    id: el.id,
    answers: el.answers.filter(ans => {
      if (el.answerType !== "Numeric") {
        return ans.currect === true;
      }
      return ans.currect
    })
  };
});

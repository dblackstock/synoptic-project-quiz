import React from "react";
// this function returns question data formatted as QuestionCard components
// questions are not retrieved by this function
export default function displayQuestionsAsCards(
  questions,
  cardType,
  retrieveAnswerForQuestion,
  answerViewPermission,
  editPermission,
  setQuestions,
  quizId
) {
  let questionList = [];
  if (answerViewPermission) {
    questions.forEach((element) => {
      questionList.push(React.createElement(cardType, { data: element, getAnswer: retrieveAnswerForQuestion }));
    });
  } else if (editPermission) {
    questions.forEach((element) => {
      questionList.push(
        React.createElement(cardType, {
          data: element,
          questions: questions,
          setQuestions: setQuestions,
          quizId: quizId,
        })
      );
    });
  } else {
    questions.forEach((element) => {
      questionList.push(React.createElement(cardType, { data: element }));
    });
  }

  return questionList;
}

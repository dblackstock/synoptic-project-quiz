// this function returns question data formatted as QuestionCard components
// questions are not retrieved by this function
import QuestionCard from "../components/QuestionCard";
export default function displayQuestionsAsCards(questions, retrieveAnswerForQuestion, answerViewPermission) {
  let questionList = [];
  if (answerViewPermission) {
    questions.forEach((element) => {
      questionList.push(<QuestionCard data={element} getAnswer={retrieveAnswerForQuestion} />);
    });
  } else {
    questions.forEach((element) => {
      questionList.push(<QuestionCard data={element} />);
    });
  }

  return questionList;
}

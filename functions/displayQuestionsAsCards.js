// this function returns question data formatted as QuestionCard components
// questions are not retrieved by this function
import QuestionCard from "../components/QuestionCard";
export default function displayQuestionsAsCards(questions, retrieveAnswerForQuestion) {
  let questionList = [];

  questions.forEach((element) => {
    questionList.push(<QuestionCard data={element} getAnswer={retrieveAnswerForQuestion} />);
  });

  return questionList;
}

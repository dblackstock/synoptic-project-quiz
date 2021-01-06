// this function returns question data formatted as QuestionCard components
// questions are not retrieved by this function
import QuestionCard from "../components/QuestionCard";
export default function displayQuestionsAsCards(questions) {
  let questionList = [];

  questions.forEach((element) => {
    questionList.push(<QuestionCard data={element} />);
  });

  return questionList;

  //     let answerList = [];
  //     answers.forEach((element, index) => {
  //       let alphabetIndex = String.fromCharCode(65 + index);
  //       answerList.push(
  //         <li key={element.answerId}>
  //           {alphabetIndex}. {element.answerText}
  //         </li>
  //       );
  //     });
  //     return answerList;
}

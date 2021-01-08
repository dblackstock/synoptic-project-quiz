import displayQuestionsAsCards from "../functions/displayQuestionsAsCards";
import _ from "lodash";
import QuestionCardForEditing from "../components/QuestionCardForEditing";
import quizStyles from "../styles/ViewQuizzes.module.css";

export default function Editor({ questions, setQuestions, title, quizId, clearQuiz }) {
  return (
    <div>
      <div>Now editing {title}</div>
      <div data-testid="back-button" className={quizStyles.backbutton + " " + quizStyles.button} onClick={clearQuiz}>
        Back to Quiz List
      </div>
      <div id="questionssaved"></div>
      {displayQuestionsAsCards(questions, QuestionCardForEditing, false, false, true, setQuestions, quizId)}
    </div>
  );
}

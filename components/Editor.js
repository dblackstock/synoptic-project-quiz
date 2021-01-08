import { useState } from "react";
import displayQuestionsAsCards from "../functions/displayQuestionsAsCards";
import _ from "lodash";
import QuestionCardForEditing from "../components/QuestionCardForEditing";
import quizStyles from "../styles/ViewQuizzes.module.css";
import editorStyles from "../styles/QuizEditor.module.css";
import ConfirmModal from "../components/ConfirmModal";
import createQuestion from "../functions/createQuestion";

export default function Editor({ questions, setQuestions, title, quizId, clearQuiz, setAddingQuestion }) {
  return (
    <div>
      <div>Now editing {title}</div>
      <div data-testid="back-button" className={quizStyles.backbutton + " " + quizStyles.button} onClick={clearQuiz}>
        Back to Quiz List
      </div>
      {displayQuestionsAsCards(questions, QuestionCardForEditing, false, false, true, setQuestions, quizId)}
      <div
        className={editorStyles.addbutton + " " + quizStyles.button}
        onClick={() => {
          setAddingQuestion(true);
        }}
      >
        Add Question
      </div>
    </div>
  );
}

import { useState } from "react";
import _ from "lodash";
import styles from "../styles/QuestionCard.module.css";
import viewStyles from "../styles/ViewQuizzes.module.css";
import editStyles from "../styles/QuestionCardForEditing.module.css";
import displayAnswersAsListItems from "../functions/displayAnswersAsListItems";
import updateQuestion from "../functions/updateQuestion";
export default function QuestionCardForEditing({ data, questions, setQuestions, quizId }) {
  const [questionEdited, setQuestionEdited] = useState(data);

  const setQuestionTitle = (e) => {
    const newQuestion = _.cloneDeep(questionEdited);
    newQuestion.questionText = e.target.value;
    setQuestionEdited(newQuestion);
  };
  // saveEdit will run when the question is saved
  // it will accept the value of questionEdited and insert the edited question into the full quiz object before calling the update API

  return (
    <div className={styles.questionwrapper}>
      <div className={styles.titlewrapper}>
        <h3 className={styles.titlenumber}>Question {data.questionNumber}</h3>
        <input
          className={styles.title}
          id={data.questionId}
          defaultValue={questionEdited.questionText}
          onChange={setQuestionTitle}
        />
      </div>
      <div className={styles.answerwrapper}>
        <h3 className={styles.answerheader}>Answers</h3>
        <ul className={styles.answerlist}>{displayAnswersAsListItems(data.answers)}</ul>
        <div>
          <div
            className={viewStyles.button + " " + editStyles.savebutton}
            onClick={() => {
              updateQuestion({
                modifiedQuestion: questionEdited,
                questions: questions,
                setQuestions: setQuestions,
                quizId: quizId,
              });
            }}
          >
            Save changes to this question
          </div>
          <div id={data.questionId + "result"}></div>
        </div>
      </div>
    </div>
  );
}

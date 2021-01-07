import styles from "../styles/QuestionCard.module.css";
import viewStyles from "../styles/ViewQuizzes.module.css";
import displayAnswersAsListItems from "../functions/displayAnswersAsListItems";
export default function QuestionCard({ data, getAnswer }) {
  return (
    <div className={styles.questionwrapper}>
      <div className={styles.titlewrapper}>
        <h3 className={styles.titlenumber}>Question {data.questionNumber}</h3>
        <h3 className={styles.title}>{data.questionText}</h3>
      </div>
      <div className={styles.answerwrapper}>
        <h3 className={styles.answerheader}>Answers</h3>
        <ul className={styles.answerlist}>{displayAnswersAsListItems(data.answers)}</ul>
        {getAnswer ? (
          <div
            className={viewStyles.button + " " + styles.answerbutton}
            id={data.questionId}
            onClick={() => {
              displayAnswer(getAnswer, data.questionId);
            }}
          >
            Display Answer
          </div>
        ) : null}
      </div>
    </div>
  );
}

const displayAnswer = async (getAnswer, questionId) => {
  const answer = await getAnswer(questionId);
  document.getElementById(questionId).textContent = answer.answerText;
  document.getElementById(questionId).disabled = true;
  return answer.answerText;
};

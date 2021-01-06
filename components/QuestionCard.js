import styles from "../styles/QuestionCard.module.css";
import displayAnswersAsListItems from "../functions/displayAnswersAsListItems";
export default function QuestionCard({ data }) {
  return (
    <div className={styles.questionwrapper}>
      <div className={styles.titlewrapper}>
        <h3 className={styles.titlenumber}>Question {data.questionNumber}</h3>
        <h3 className={styles.title}>{data.questionText}</h3>
      </div>
      <div className={styles.answerwrapper}>
        <h3 className={styles.answerheader}>Answers</h3>
        <ul className={styles.answerlist}>{displayAnswersAsListItems(data.answers)}</ul>
      </div>
    </div>
  );
}

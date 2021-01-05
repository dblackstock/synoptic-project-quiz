import styles from "../styles/QuizButton.module.css";
export default function QuizButton(props) {
  const loadQuiz = () => {
    alert("Load the quiz!");
  };
  return (
    <div className={styles.button} key={props.quizId} onClick={loadQuiz}>
      {props.quizName}
    </div>
  );
}

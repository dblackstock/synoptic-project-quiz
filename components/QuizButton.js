import styles from "../styles/QuizButton.module.css";
export default function QuizButton(props) {
  return (
    <div
      className={styles.button}
      key={props.quizId}
      onClick={() => {
        props.onClickFunction({ id: props.quizId, title: props.quizName });
      }}
    >
      {props.quizName}
    </div>
  );
}

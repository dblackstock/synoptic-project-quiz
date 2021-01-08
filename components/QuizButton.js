import styles from "../styles/QuizButton.module.css";
export default function QuizButton(props) {
  return (
    <>
      {props.deleteFunction ? (
        <div className={styles.buttonwrapper}>
          <div
            className={styles.buttonselect}
            key={props.quizId}
            onClick={() => {
              props.onClickFunction({ id: props.quizId, title: props.quizName });
            }}
          >
            {props.quizName}
          </div>
          <div
            className={styles.buttondelete}
            onClick={() => {
              window.event.cancelBubble = true;
              props.deleteFunction(props.quizId);
            }}
          >
            🗑️
          </div>
        </div>
      ) : (
        <div
          className={styles.button}
          key={props.quizId}
          onClick={() => {
            props.onClickFunction({ id: props.quizId, title: props.quizName });
          }}
        >
          {props.quizName}
        </div>
      )}
    </>
  );
}

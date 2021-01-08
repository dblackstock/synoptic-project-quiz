import modalStyles from "../styles/ConfirmModal.module.css";
import viewStyles from "../styles/ViewQuizzes.module.css";

export default function ConfirmModal({
  confirmFunction,
  cancelFunction,
  headerText,
  addingQuiz,
  addingQuestion,
  confirmButtonText,
  numberOfQuestions,
}) {
  return (
    <div className={modalStyles.modalwrapper}>
      <div className={modalStyles.querybox}>
        <h2>{headerText}</h2>
        {addingQuiz ? (
          <>
            <label for="name">New quiz name:</label>
            <input className={modalStyles.input} id={"saveinput"} name="name" type="text" required />
          </>
        ) : null}

        {addingQuestion ? (
          <>
            {" "}
            <div className={modalStyles.addquestionwrap}>
              <label for="name">New question name:</label>
              <input className={modalStyles.input} id={"questiontitleinput"} name="name" type="text" required />
              <label for="number"> Question number:</label>
              <input
                className={modalStyles.input}
                id={"questionnumberinput"}
                name="number"
                type="number"
                min="1"
                max={numberOfQuestions + 1}
                defaultValue={numberOfQuestions + 1}
              />
              <div className={modalStyles.input}>Check the box for the correct answer</div>
              <div className={modalStyles.input}>
                <label for="name">Answer A:</label>
                <input className={modalStyles.inputanswer} id={"answerainput"} name="answera" type="text" required />
                <input
                  className={modalStyles.inputcorrect}
                  id={"answeracorrect"}
                  type="radio"
                  name="correctanswer"
                  value="a"
                  checked
                />
                <label for="name">Answer B:</label>
                <input className={modalStyles.inputanswer} id={"answerbinput"} name="answerb" type="text" required />
                <input
                  className={modalStyles.inputcorrect}
                  id={"answerbcorrect"}
                  type="radio"
                  name="correctanswer"
                  value="b"
                />
                <label for="name">Answer C:</label>
                <input className={modalStyles.inputanswer} id={"answercinput"} name="answerc" type="text" required />
                <input
                  className={modalStyles.inputcorrect}
                  id={"answerccorrect"}
                  type="radio"
                  name="correctanswer"
                  value="c"
                />
              </div>
            </div>
          </>
        ) : null}

        <div className={modalStyles.buttonset}>
          <button
            className={viewStyles.button + " " + modalStyles.confirmbutton}
            form="confirm"
            type="submit"
            onClick={() => {
              confirmFunction();
            }}
          >
            {confirmButtonText}
          </button>
          <button
            className={viewStyles.button + " " + modalStyles.cancelbutton}
            onClick={() => {
              cancelFunction(false);
            }}
            form="confirm"
            type="button"
          >
            Cancel
          </button>
        </div>
        <div id="result"></div>
      </div>
    </div>
  );
}

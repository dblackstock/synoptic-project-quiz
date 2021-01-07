import modalStyles from "../styles/ConfirmModal.module.css";
import viewStyles from "../styles/ViewQuizzes.module.css";

export default function ConfirmModal({ confirmFunction, cancelFunction, headerText, addingQuiz, confirmButtonText }) {
  return (
    <div className={modalStyles.modalwrapper}>
      <div className={modalStyles.querybox}>
        <h2>{headerText}</h2>
        {addingQuiz ? (
          <>
            <label for="name">New quiz name:</label>
            <input className={modalStyles.newname} id={"saveinput"} name="name" type="text" required />
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

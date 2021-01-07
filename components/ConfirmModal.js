import modalStyles from "../styles/ConfirmModal.module.css";
import viewStyles from "../styles/ViewQuizzes.module.css";
import saveQuiz from "../functions/saveQuiz";

export default function ConfirmModal({ cancelFunction }) {
  return (
    <div className={modalStyles.modalwrapper}>
      <div className={modalStyles.querybox}>
        <h2>Create a new quiz</h2>
        <label for="name">New quiz name:</label>
        <input className={modalStyles.newname} id={"saveinput"} name="name" type="text" required />
        <div className={modalStyles.buttonset}>
          <button
            className={viewStyles.button + " " + modalStyles.confirmbutton}
            form="confirm"
            type="submit"
            onClick={() => {
              saveQuiz(document.getElementById("saveinput").value);
            }}
          >
            Create
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

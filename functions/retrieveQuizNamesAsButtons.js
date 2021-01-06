import data from "../public/quizzes.json";
import QuizButton from "../components/QuizButton";

export default function retrieveQuizNamesAsButtons(setQuizIdAndTitle) {
  const quizNames = [];
  data.forEach((element) => {
    quizNames.push(
      <QuizButton quizName={element.quizName} quizId={element.quizId} onClickFunction={setQuizIdAndTitle}></QuizButton>
    );
  });
  return quizNames;
}

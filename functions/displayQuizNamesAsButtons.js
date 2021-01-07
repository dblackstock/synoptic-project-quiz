import QuizButton from "../components/QuizButton";

export default function displayQuizNamesAsButtons(quizzes, setQuizIdAndTitle) {
  const quizNames = [];
  quizzes.forEach((element) => {
    quizNames.push(
      <QuizButton quizName={element.quizName} quizId={element.quizId} onClickFunction={setQuizIdAndTitle}></QuizButton>
    );
  });
  return quizNames;
}

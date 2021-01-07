import QuizButton from "../components/QuizButton";

export default function displayQuizNamesAsButtons(quizzes, setQuizIdAndTitle, deleteQuiz) {
  const quizNames = [];
  quizzes.forEach((element) => {
    quizNames.push(
      <QuizButton
        quizName={element.quizName}
        quizId={element.quizId}
        onClickFunction={setQuizIdAndTitle}
        deleteFunction={deleteQuiz}
      ></QuizButton>
    );
  });
  return quizNames;
}

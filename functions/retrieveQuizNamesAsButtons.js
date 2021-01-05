import data from "../public/quizzes.json";
import QuizButton from "../components/QuizButton";

export default function retrieveQuizNamesAsButtons() {
  const quizNames = [];
  data.forEach((element) => {
    quizNames.push(<QuizButton quizName={element.quiz_name} quizId={element.quiz_id}></QuizButton>);
  });
  return quizNames;
}

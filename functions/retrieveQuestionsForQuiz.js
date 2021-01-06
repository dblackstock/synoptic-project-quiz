import data from "../public/quizzes.json";

export default function retrieveQuestionsForQuiz(quizId) {
  // find the questions
  const rawQuizData = data.find((element) => element.quizId === quizId);

  // loop to sort the data based on question number
  rawQuizData.questions.sort((a, b) => {
    return a.questionNumber - b.questionNumber;
  });

  return rawQuizData.questions;
}

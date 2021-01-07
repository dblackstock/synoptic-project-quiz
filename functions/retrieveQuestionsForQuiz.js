import data from "../public/quizzes.json";

export default async function retrieveQuestionsForQuiz(quizId) {
  // find the questions
  const resultsList = await fetch("http://localhost:3000/api/get-questions", { method: "POST", body: 1 });
  const results = await resultsList.json();
  console.log(results);

  // loop to sort the data based on question number
  results[0].questions.sort((a, b) => {
    return a.questionNumber - b.questionNumber;
  });

  return results[0].questions;
}

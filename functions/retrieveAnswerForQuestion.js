export default async function retrieveAnswerForQuestion(questionId) {
  // find the answer
  const resultsList = await fetch("http://localhost:3000/api/get-answer", { method: "POST", body: questionId });
  const results = await resultsList.json();
  return results;
}

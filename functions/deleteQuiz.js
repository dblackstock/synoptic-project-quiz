export default async function deleteQuiz(quizId) {
  const results = await fetch("http://localhost:3000/api/delete-quiz", { method: "POST", body: quizId });
  if (results.status === 200) {
    location.reload();
  } else {
    document.getElementById("result").textContent = "Your quiz could not be deleted. Please try again.";
    return;
  }
}

export default async function saveQuiz(data) {
  if (!data) {
    document.getElementById("result").textContent = "You must enter a quiz title.";
    return;
  }
  const results = await fetch("http://localhost:3000/api/create-quiz", { method: "POST", body: data });
  if (results.status === 200) {
    location.reload();
  } else {
    document.getElementById("result").textContent = "Your quiz could not be saved. Please try again.";
    return;
  }
}

export default async function updateQuestion({ modifiedQuestion, questions, setQuestions, quizId }) {
  //clone questions

  const updatedQuestions = _.cloneDeep(questions);

  //update the questions clone to have the modified question in

  let questionUpdated = false;
  for (let index = 0; index < (updatedQuestions.length && !questionUpdated); index++) {
    let question = updatedQuestions[index];
    if (question.questionId === modifiedQuestion.questionId) {
      updatedQuestions.splice(index, 1, modifiedQuestion);
      questionUpdated = true; //exits the loop once the correct question is updated
    }
  }

  //   console.log(updatedQuestions);
  //   call the database to update the questions
  const updateResult = await fetch("http://localhost:3000/api/update-questions", {
    method: "POST",
    body: JSON.stringify({ quizId: quizId, questions: updatedQuestions }),
  });
  //update the state with 'setQuestions' if the call was successful
  console.log(updateResult);
  if (updateResult.status === 200) {
    setQuestions(updatedQuestions);
    document.getElementById(modifiedQuestion.questionId + "result").textContent =
      "Your edited question has been saved.";
  } else {
    document.getElementById(modifiedQuestion.questionId + "result").textContent =
      "Your question could not be saved. Please try again.";
    return;
  }
}

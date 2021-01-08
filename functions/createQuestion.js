import _ from "lodash";

export default async function createQuestion({ questions, quizId, setQuestions }) {
  const title = document.getElementById("questiontitleinput").value;
  const number = parseInt(document.getElementById("questionnumberinput").value);
  const answerA = document.getElementById("answerainput").value;
  const aTrue = document.getElementById("answeracorrect").checked;
  const answerB = document.getElementById("answerbinput").value;
  const bTrue = document.getElementById("answerbcorrect").checked;
  const answerC = document.getElementById("answercinput").value;
  const cTrue = document.getElementById("answerccorrect").checked;

  const questionsToUpdate = _.cloneDeep(questions);

  // validation of results

  let overflow = document.getElementById("questionnumberinput").validity.rangeOverflow;
  let underflow = document.getElementById("questionnumberinput").validity.rangeUnderflow;

  if (overflow || underflow) {
    document.getElementById("result").textContent =
      "Please enter a question number between 1 and " + (questions.length + 1);
    return;
  } else if (!title || !number || !answerA || !answerB || !answerC) {
    document.getElementById("result").textContent = "Please fill in all available fields";
    return;
  }
  document.getElementById("result").textContent = "";

  //assemble the object to be sent to the database

  const questionObject = {
    questionId: Math.floor(Math.random() * 10000),
    questionNumber: number,
    questionText: title,
    answers: [
      { answerId: Math.floor(Math.random() * 10000), answerText: answerA, isCorrect: aTrue },
      { answerId: Math.floor(Math.random() * 10000), answerText: answerB, isCorrect: bTrue },
      { answerId: Math.floor(Math.random() * 10000), answerText: answerC, isCorrect: cTrue },
    ],
  };

  // if the question number is less than the maximum, iterate all question numbers following it
  if (number <= questionsToUpdate.length) {
    questionsToUpdate.forEach((element) => {
      element.questionNumber >= number ? element.questionNumber++ : null;
    });
  }
  questionsToUpdate.push(questionObject);

  //   call the database to update the questions
  const updateResult = await fetch("http://localhost:3000/api/update-questions", {
    method: "POST",
    body: JSON.stringify({ quizId: quizId, questions: questionsToUpdate }),
  });

  //update the state with 'setQuestions' if the call was successful
  console.log(updateResult);
  if (updateResult.status === 200) {
    setQuestions(questionsToUpdate);
    location.reload();
  } else {
    document.getElementById("result").textContent = "Your question could not be saved. Please try again.";
    return;
  }
}

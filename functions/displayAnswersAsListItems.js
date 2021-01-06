// answers are not retrieved by this function, it is only to format them for readability
export default function displayAnswersAsListItems(answers) {
  let answerList = [];
  answers.forEach((element, index) => {
    let alphabetIndex = String.fromCharCode(65 + index);
    answerList.push(
      <li key={element.answerId}>
        {alphabetIndex}. {element.answerText}
      </li>
    );
  });
  return answerList;
}

// this is also testing the QuestionCard component and the displayAnswersAsListItems function
import { render } from "@testing-library/react";
import displayQuestionsAsCards from "../functions/displayQuestionsAsCards";
import data from "../public/quizzes.json";

const questions = data[0].questions;

describe("display questions as question cards", () => {
  it("displays a quiz question", async () => {
    const { getByText } = await render(displayQuestionsAsCards(questions));
    const questionTitle = getByText(/Which subatomic particle has a positive charge?/);
    expect(questionTitle).not.toBeNull();
  });
  it("displays the correct question number", async () => {
    const { getByText } = await render(displayQuestionsAsCards(questions));
    const questionTitle = getByText(questions[0].questionText);
    const questionNumber = questionTitle.parentElement.firstChild;
    expect(questionNumber.textContent).toEqual(`Question ${questions[0].questionNumber}`);
  });
  it("demarcates answers with a letter index", async () => {
    const { getAllByText } = await render(displayQuestionsAsCards(questions));
    const answer = getAllByText(/Proton/)[0];
    expect(answer.textContent).toEqual(expect.stringMatching(/^[A-E]\./));
  });
});

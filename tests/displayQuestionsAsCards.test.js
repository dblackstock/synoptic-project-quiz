// this is also testing the QuestionCard component and the displayAnswersAsListItems function
import { render } from "@testing-library/react";
import displayQuestionsAsCards from "../functions/displayQuestionsAsCards";
import QuestionCard from "../components/QuestionCard";
import data from "../public/quizzes.json";

const questions = data[0].questions;

const testFn = jest.fn();

describe("display questions as question cards", () => {
  it("displays a quiz question", async () => {
    const { getByText } = await render(displayQuestionsAsCards(questions, QuestionCard));
    const questionTitle = getByText(/Which subatomic particle has a positive charge?/);
    expect(questionTitle).not.toBeNull();
  });
  it("displays the correct question number", async () => {
    const { getByText } = await render(displayQuestionsAsCards(questions, QuestionCard));
    const questionTitle = getByText(questions[0].questionText);
    const questionNumber = questionTitle.parentElement.firstChild;
    expect(questionNumber.textContent).toEqual(`Question ${questions[0].questionNumber}`);
  });
  it("demarcates answers with a letter index", async () => {
    const { getAllByText } = await render(displayQuestionsAsCards(questions, QuestionCard));
    const answer = getAllByText(/Proton/)[0];
    expect(answer.textContent).toEqual(expect.stringMatching(/^[A-E]\./));
  });
  it("displays an answer button when permission is given", async () => {
    const { getAllByText } = await render(displayQuestionsAsCards(questions, QuestionCard, testFn, true));
    const answer = getAllByText(/Display Answer/)[0];
    expect(answer).not.toBeNull();
  });
  it("does not display an answer button when no permission is given", async () => {
    const { queryByText } = await render(displayQuestionsAsCards(questions, QuestionCard, testFn, false));
    const answer = queryByText(/Display Answer/);
    expect(answer).toBeNull();
  });
  // There should be a test here about clicking the Display Answer button but I've not included it due to lack of time
});

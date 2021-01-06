import { fireEvent, render } from "@testing-library/react";
import ViewQuizzes from "../pages/view-quizzes";

jest.mock("../functions/displayQuestionsAsCards", () => {
  return function (text) {
    return <div data-testid="question-info">{text}</div>;
  };
});

jest.mock("../functions/retrieveQuestionsForQuiz", () => {
  return function () {
    return "Some Question Text";
  };
});

jest.mock("../utils/user", () => {
  return {
    ...jest.requireActual("../utils/user"),
    useFetchUser: () => {
      return { user: true, loading: false };
    },
  };
});

jest.mock("../functions/retrieveQuizNamesAsButtons", () => {
  return function (selectQuiz) {
    return (
      <div
        data-testid="quiz-button"
        onClick={() => {
          selectQuiz({ id: 1, title: "testquiz" });
        }}
      >
        A Test Quiz
      </div>
    );
  };
});

describe("View Quizzes Page", () => {
  it("renders without errors", async () => {
    const { getByTestId } = await render(<ViewQuizzes />);
    expect(getByTestId("view-quiz-page")).not.toBeNull();
  });
  it("displays the quiz name", async () => {
    const { getByTestId } = await render(<ViewQuizzes />);
    const quizButton = getByTestId("quiz-button");
    expect(quizButton).not.toBeNull();
    expect(quizButton.textContent).toEqual("A Test Quiz");
  });
  it("does not display the back button", async () => {
    const { queryByTestId } = await render(<ViewQuizzes />);
    expect(queryByTestId("back-button")).toBeNull();
  });
});

describe("Selecting a quiz", () => {
  it("displays questions", async () => {
    const { getByTestId } = await render(<ViewQuizzes />);
    const quizButton = getByTestId("quiz-button");
    fireEvent.click(quizButton);
    const questionInfo = getByTestId("question-info");
    expect(questionInfo).not.toBeNull();
    expect(questionInfo.textContent).toEqual("Some Question Text");
  });
  it("displays the back button", async () => {
    const { getByTestId } = await render(<ViewQuizzes />);
    const quizButton = getByTestId("quiz-button");
    fireEvent.click(quizButton);
    expect(getByTestId("back-button")).not.toBeNull();
  });
  it("no longer displays the quiz select button", async () => {
    const { getByTestId, queryByTestId } = await render(<ViewQuizzes />);
    const quizButton = getByTestId("quiz-button");
    fireEvent.click(quizButton);
    expect(queryByTestId("quiz-button")).toBeNull();
  });
});

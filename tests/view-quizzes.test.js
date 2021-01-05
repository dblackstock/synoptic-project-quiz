import { render } from "@testing-library/react";
import ViewQuizzes from "../pages/view-quizzes";

jest.mock("../functions/retrieveQuizNamesAsButtons", () => {
  return function () {
    return <div>A Test Quiz</div>;
  };
});

describe("View Quizzes Page", () => {
  it("renders without errors", async () => {
    const { getByTestId } = await render(<ViewQuizzes />);
    expect(getByTestId("view-quiz-page")).not.toBeNull();
  });
  it("displays the quiz name", async () => {
    const { getByText } = await render(<ViewQuizzes />);
    expect(getByText(/A Test Quiz/)).not.toBeNull();
  });
});

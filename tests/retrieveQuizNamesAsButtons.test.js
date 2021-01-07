// this is also testing the QuizButton component
import { fireEvent, render } from "@testing-library/react";
import displayQuizNamesAsButtons from "../functions/displayQuizNamesAsButtons";
import quizzes from "../public/quizzes.json";

const handleClick = jest.fn();

describe("Display quiz names ", () => {
  const buttons = displayQuizNamesAsButtons(quizzes, handleClick);
  it("Displays a quiz name correctly", async () => {
    const { getByText } = await render(buttons);
    expect(getByText(/Physics Module 4: Atoms/)).not.toBeNull();
  });
  it("runs function correctly on click", async () => {
    const { getByText } = await render(buttons);
    const result = fireEvent.click(getByText(/Physics Module 4: Atoms/));
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(handleClick).toHaveBeenCalledWith({ id: 1, title: "Physics Module 4: Atoms" });
  });
});

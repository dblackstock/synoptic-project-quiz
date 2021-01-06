// this is also testing the QuizButton component
import { fireEvent, render } from "@testing-library/react";
import retrieveQuizNamesAsButtons from "../functions/retrieveQuizNamesAsButtons";

const handleClick = jest.fn();

describe("Retrieve quiz names ", () => {
  const buttons = retrieveQuizNamesAsButtons(handleClick);
  it("Retrieves a quiz name correctly", async () => {
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

import { render } from "@testing-library/react";
import Nav from "../components/Nav";

describe("Navigation Bar", () => {
  it("displays the Quiz Questions button", async () => {
    const { getByTestId } = await render(<Nav />);
    const navItem = getByTestId("view-quizzes");
    expect(navItem).not.toBeNull;
    expect(navItem.textContent).toEqual("Quiz Questions");
  });
  it("is set up to navigate to homepage when logo is clicked", async () => {
    const { getByTestId } = await render(<Nav />);
    const navItem = getByTestId("home");
    expect(navItem.getAttribute("href")).toEqual("/");
  });
  it("is set up to navigate to Quiz Questions page when Quiz Questions button is clicked", async () => {
    const { getByTestId } = await render(<Nav />);
    const navItem = getByTestId("view-quizzes");
    expect(navItem.getAttribute("href")).toEqual("/view-quizzes");
  });
});

import { render } from "@testing-library/react";
import Nav from "../components/Nav";

describe("Navigation Bar when logged in with no permissions", () => {
  it("displays the View Quizzes button", async () => {
    const { getByTestId } = await render(<Nav user={{ nickname: "davey" }} loading={false} />);
    const navItem = getByTestId("view-quizzes");
    expect(navItem).not.toBeNull;
    expect(navItem.textContent).toEqual("View Quizzes");
  });
  it("displays the Logout button", async () => {
    const { getByTestId } = await render(<Nav user={{ nickname: "davey" }} loading={false} />);
    const navItem = getByTestId("logout");
    expect(navItem).not.toBeNull;
    expect(navItem.textContent).toEqual("Logout");
  });
  it("displays the user nickname", async () => {
    const { getByText } = await render(<Nav user={{ nickname: "davey" }} loading={false} />);
    const navItem = getByText("davey");
    expect(navItem.textContent).toEqual("davey");
  });
  it("does not display the Login button", async () => {
    const { queryByTestId } = await render(<Nav user={{ nickname: "davey" }} loading={false} />);
    const navItem = queryByTestId("login");
    expect(navItem).toBeNull;
  });
  it("does not display the View Quizzes button if still loading", async () => {
    const { queryByTestId } = await render(<Nav user={{ nickname: "davey" }} loading={true} />);
    const navItem = queryByTestId("view-quizzes");
    expect(navItem).toBeNull;
  });
  it("is set up to navigate to homepage when logo is clicked", async () => {
    const { getByTestId } = await render(<Nav user={{ nickname: "davey" }} loading={false} />);
    const navItem = getByTestId("home");
    expect(navItem.getAttribute("href")).toEqual("/");
  });
  it("is set up to navigate to View Quizzes page when View Quizzes button is clicked", async () => {
    const { getByTestId } = await render(<Nav user={{ nickname: "davey" }} loading={false} />);
    const navItem = getByTestId("view-quizzes");
    expect(navItem.getAttribute("href")).toEqual("/view-quizzes");
  });
});

describe("Navigation Bar when logged in with varying permissions", () => {
  it("does not display the Quiz Editor button when permission: restricted", async () => {
    const { queryByTestId } = await render(
      <Nav user={{ nickname: "davey", "https://localhost:3000/permission": "restricted" }} loading={false} />
    );
    const navItem = queryByTestId("quiz-editor");
    expect(navItem).toBeNull;
  });
  it("does not display the Quiz Editor button when permission: view", async () => {
    const { queryByTestId } = await render(
      <Nav user={{ nickname: "davey", "https://localhost:3000/permission": "view" }} loading={false} />
    );
    const navItem = queryByTestId("quiz-editor");
    expect(navItem).toBeNull;
  });
  it("displays the Quiz Editor button when permission: edit", async () => {
    const { getByTestId } = await render(
      <Nav user={{ nickname: "davey", "https://localhost:3000/permission": "edit" }} loading={false} />
    );
    const navItem = getByTestId("quiz-editor");
    expect(navItem).not.toBeNull;
  });
});

describe("Navigation Bar when logged out", () => {
  it("displays the Login button", async () => {
    const { getByTestId } = await render(<Nav />);
    const navItem = getByTestId("login");
    expect(navItem).not.toBeNull;
    expect(navItem.textContent).toEqual("Login");
  });
  it("does not display the Logout button", async () => {
    const { queryByTestId } = await render(<Nav />);
    const navItem = queryByTestId("logout");
    expect(navItem).toBeNull;
  });
  it("does not display the View Quizzes button", async () => {
    const { queryByTestId } = await render(<Nav />);
    const navItem = queryByTestId("view-quizzes");
    expect(navItem).toBeNull;
  });
});

describe("Logging in and out", () => {
  it("is set up to log the user in when Login button is clicked", async () => {
    const { getByTestId } = await render(<Nav />);
    const navItem = getByTestId("login");
    expect(navItem.getAttribute("href")).toEqual("/api/login");
  });
  it("is set up to log the user out when Logout button is clicked", async () => {
    const { getByTestId } = await render(<Nav user={{ nickname: "davey" }} loading={false} />);
    const navItem = getByTestId("logout");
    expect(navItem.getAttribute("href")).toEqual("/api/logout");
  });
});

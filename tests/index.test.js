import { render } from "@testing-library/react";

import Home from "../pages/index";

describe("Homepage", () => {
  it("renders without errors", async () => {
    const { getByTestId } = await render(<Home />);
    expect(getByTestId("home-page")).not.toBeNull();
  });
});

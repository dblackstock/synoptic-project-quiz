import { render } from "@testing-library/react";

import Home from "../pages/index";

describe("Homepage", () => {
  it("renders without errors", async () => {
    const { getByText } = await render(<Home />);
    expect(getByText(/Welcome/)).not.toBeNull();
  });
});

import { withRender } from "../../utils/testUtils";
import { MemoryRouter } from "react-router-dom";
import Navbar from "./index";

describe("Navbar", function () {
  it("should match snapshot", () => {
    const { container } = withRender(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });
});

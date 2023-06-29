import { withRender } from "../../utils/testUtils";
import { MemoryRouter } from "react-router-dom";
import Searchbar from "./index";

describe("Searchbar", function () {
  it("should match snapshot", () => {
    const { container } = withRender(
      <MemoryRouter>
        <Searchbar />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });
});

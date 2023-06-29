import { withRender } from "../../utils/testUtils";
import { MemoryRouter } from "react-router-dom";
import Details from "./index";

describe("Searchbar", function () {
  it("should match snapshot", () => {
    const { container } = withRender(
      <MemoryRouter>
        <Details />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });
});

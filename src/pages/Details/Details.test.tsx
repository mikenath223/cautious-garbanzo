import { withRender } from "../../utils/testUtils";
import Details from "./index";

describe("Searchbar", function () {
  it("should match snapshot", () => {
    const { container } = withRender(<Details />);

    expect(container).toMatchSnapshot();
  });
});

import { withRender } from "../../utils/testUtils";
import Searchbar from "./index";

describe("Searchbar", function () {
  it("should match snapshot", () => {
    const { container } = withRender(<Searchbar />);

    expect(container).toMatchSnapshot();
  });
});

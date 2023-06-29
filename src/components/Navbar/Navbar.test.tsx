import { withRender } from "../../utils/testUtils";
import Navbar from "./index";

describe("Navbar", function () {
  it("should match snapshot", () => {
    const { container } = withRender(<Navbar />);

    expect(container).toMatchSnapshot();
  });
});

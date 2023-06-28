import { withRender } from "../../utils/testUtils";
import Footer from "./index";

describe("Footer", function () {
  it("should match snapshot", () => {
    const { container } = withRender(<Footer />);

    expect(container).toMatchSnapshot();
  });
});

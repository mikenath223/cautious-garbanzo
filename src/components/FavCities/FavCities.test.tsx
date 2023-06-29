import { withRender } from "../../utils/testUtils";
import FavCities from "./index";

describe("FavCities", function () {
  it("should match snapshot", () => {
    const { container } = withRender(<FavCities />);
    expect(container).toMatchSnapshot();
  });
});

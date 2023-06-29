import { defaultCity } from "../../utils/constants";
import { withRender } from "../../utils/testUtils";
import FavCity from "./index";

describe("FavCity", function () {
  it("should match snapshot", () => {
    const { container } = withRender(
      <FavCity city={defaultCity} onRemoveCity={() => jest.fn()} />
    );

    expect(container).toMatchSnapshot();
  });
});

import { defaultCity } from "../../utils/constants";
import { withRender } from "../../utils/testUtils";
import FavCity from "./index";
import { MemoryRouter } from "react-router-dom";

describe("FavCity", function () {
  it("should match snapshot", () => {
    const { container } = withRender(
      <MemoryRouter>
        <FavCity city={defaultCity} onRemoveCity={() => jest.fn()} />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });
});

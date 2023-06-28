import { defaultCity } from "../../utils/constants";
import { withRender } from "../../utils/testUtils";
import FavCityTemp from "./index";
import { MemoryRouter } from "react-router-dom";

describe("FavCityTemp", function () {
  it("should match snapshot", () => {
    const { container } = withRender(
      <MemoryRouter>
        <FavCityTemp city={defaultCity} onRemoveCity={() => jest.fn()} />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });
});

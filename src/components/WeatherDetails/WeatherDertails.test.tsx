import { withRender } from "../../utils/testUtils";
import WeatherDetails from "./index";
import { defaultCity } from "../../utils/constants";

describe("Searchbar", function () {
  it("should match snapshot", () => {
    const { container } = withRender(
      <WeatherDetails
        city={defaultCity}
        isFavorites={false}
        onAddFavorites={() => jest.fn()}
        onRemoveFavorites={() => jest.fn()}
      />
    );

    expect(container).toMatchSnapshot();
  });
});

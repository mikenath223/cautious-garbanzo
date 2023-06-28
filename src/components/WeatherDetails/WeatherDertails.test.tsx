import { withRender } from "../../utils/testUtils";
import { MemoryRouter } from "react-router-dom";
import WeatherDetails from "./index";
import { defaultCity } from "../../utils/constants";

describe("Searchbar", function () {
  it("should match snapshot", () => {
    const { container } = withRender(
      <MemoryRouter>
        <WeatherDetails
          city={defaultCity}
          isFavorites={false}
          onAddFavorites={() => jest.fn()}
          onRemoveFavorites={() => jest.fn()}
        />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });
});

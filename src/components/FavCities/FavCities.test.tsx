import { withRender } from "../../utils/testUtils";
import FavCities from "./index";

describe("FavCities", function () {
  it("should match snapshot", () => {
    jest.spyOn(Storage.prototype, "setItem");
    Storage.prototype.setItem = jest.fn();
    jest.spyOn(Storage.prototype, "getItem");
    Storage.prototype.getItem = jest.fn();
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ test: 100 }),
      })
    ) as jest.Mock;
    const { container } = withRender(<FavCities />);
    expect(container).toMatchSnapshot();
  });
});

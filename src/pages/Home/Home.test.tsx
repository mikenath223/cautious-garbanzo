import { runMock, withRender } from "../../utils/testUtils";
import Home from "./index";

runMock();
const mockSuccessResponse = {};
const mockJsonPromise = Promise.resolve(mockSuccessResponse);
const mockFetchPromise = Promise.resolve({
  ok: true,
  json: () => mockJsonPromise,
});

jest.spyOn(localStorage, "setItem");
localStorage.setItem = (key: string, value: string) => {};
localStorage.getItem = (key: string) => null;

describe("Searchbar", function () {
  it("should match snapshot", () => {
    global.fetch = jest.fn(() => mockFetchPromise) as jest.Mock;
    const { container } = withRender(<Home />);

    expect(container).toMatchSnapshot();
  });
});

import { runMock, withRender } from "../../utils/testUtils";
import { MemoryRouter } from "react-router-dom";
import Home from "./index";

runMock();
const mockSuccessResponse = {};
const mockJsonPromise = Promise.resolve(mockSuccessResponse);
const mockFetchPromise = Promise.resolve({
  ok: true,
  json: () => mockJsonPromise,
});

global.fetch = jest.fn(() => mockFetchPromise) as jest.Mock;
jest.spyOn(localStorage, "setItem");
localStorage.setItem = (key: string, value: string) => {};
localStorage.getItem = (key: string) => null;

describe("Searchbar", function () {
  it("should match snapshot", () => {
    const { container } = withRender(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });
});

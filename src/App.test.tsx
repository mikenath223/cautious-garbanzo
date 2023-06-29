import App from "./App";
import { withRender } from "./utils/testUtils";

describe("App", function () {
  it("should match snapshot", () => {
    const { container } = withRender(<App />);

    expect(container).toMatchSnapshot();
  });
});

// const mockFetchPromise = Promise.resolve({
//   json: () => Promise.resolve({}),
// });
// global.fetch = jest.fn(() => mockFetchPromise) as jest.Mock;

// jest.mock('lodash-es', () => ({
//   ...jest.requireActual('lodash-es'),
//   isEmpty: () => jest.fn(),
//   isNil: () => jest.fn()
// }));

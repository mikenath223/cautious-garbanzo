import { defaultNote } from "../../utils/constants";
import { withRender } from "../../utils/testUtils";
import Notes from "./index";
import { MemoryRouter } from "react-router-dom";

describe("Notes", function () {
  it("should match snapshot", () => {
    const { container } = withRender(
      <MemoryRouter>
        <Notes
          note={defaultNote}
          onEditNote={() => jest.fn()}
          onDeleteNote={() => jest.fn()}
        />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });
});

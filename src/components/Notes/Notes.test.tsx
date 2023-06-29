import { defaultNote } from "../../utils/constants";
import { withRender } from "../../utils/testUtils";
import Notes from "./index";

describe("Notes", function () {
  it("should match snapshot", () => {
    const { container } = withRender(
      <Notes
        note={defaultNote}
        onEditNote={() => jest.fn()}
        onDeleteNote={() => jest.fn()}
      />
    );

    expect(container).toMatchSnapshot();
  });
});

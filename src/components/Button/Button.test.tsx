import { fireEvent, screen } from "@testing-library/react";
import Button from "./index";
import { withRender } from "../../utils/testUtils";

const onClickMock = jest.fn();

describe("Button", function () {
  const { container } = withRender(<Button>Testing</Button>);

  it("should match snapshot", () => {
    expect(container).toMatchSnapshot();
  });

  it("should be able to click button component", () => {
    withRender(<Button onClick={onClickMock}>Testing</Button>);
    fireEvent.click(screen.getByText(/Testing/));

    expect(onClickMock).toBeCalled();
  });
});

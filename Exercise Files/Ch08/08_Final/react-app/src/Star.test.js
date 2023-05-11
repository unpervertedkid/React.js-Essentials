import {render} from "@testing-library/react";
import {Star} from "./Star";

test("Star should render an h1", () => {
    // Arrange
    const expected = "Cool Star";
    // Act
    const { getByText } = render(<Star />);
    const actual = getByText(/Cool Star/);
    // Assert
    expect(actual).toHaveTextContent(expected);
});
import {fireEvent, render} from "@testing-library/react";
import {Checkbox} from "./Checkbox";

test("Checkbox should initialize with value of false and selecting should change value to true", () => {
    // Arrange
    const expected = "not checked";
    // Act
    const {getByLabelText} = render(<Checkbox/>);
    const checkbox = getByLabelText(/not checked/);
    fireEvent.click(checkbox);
    const actual = getByLabelText(/checked/);

    // Assert
    expect(checkbox.checked).toEqual(true);
});
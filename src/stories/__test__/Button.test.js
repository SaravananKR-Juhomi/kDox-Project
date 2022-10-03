import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import Button from "../../components/Button";

const renderButton = (props = {}) => {
  render(<Button {...props} />);
  const button = screen.getByText(props.label);
  return button;
};

describe("Button Component", () => {
  it("renders correctly", () => {
    render(<Button label="Submit" data-testid="label" />);
    const button = screen.getByTestId("label");
    expect(button).toMatchSnapshot();
  });
  it("renders with disabled button", () => {
    const view = renderButton({ label: "Submit", disabled: true });
    expect(view).toHaveAttribute("disabled");
  });
  it("calls onClick prop when clicked", () => {
    const handleClick = jest.fn();
    const view = renderButton({ label: "Click Me", onClick: handleClick });
    fireEvent.click(view);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  it("should render filled button of small size", () => {
    const { button } = renderButton({ label: "Click Me", size: "sm" });
    expect(button).toMatchSnapshot();
  });
  it("should render outlined button with medium size", () => {
    const { button } = renderButton({ label: "Click Me", size: "md" });
    expect(button).toMatchSnapshot();
  });
  it("should render filled button of large size", () => {
    const { button } = renderButton({ label: "Click Me", size: "lg" });
    expect(button).toMatchSnapshot();
  });
});

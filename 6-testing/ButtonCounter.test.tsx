import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ButtonCounter from "./ButtonCounter";

describe("ButtonCounter", () => {
  it("should render correctly", () => {
    const { getByText } = render(<ButtonCounter label="Click me" />);
    expect(getByText("Click me")).toBeInTheDocument();
    expect(getByText("Count: 0")).toBeInTheDocument();
  });

  it("should increment the counter when the button is clicked", () => {
    const { getByText } = render(<ButtonCounter label="Click me" />);
    const button = getByText("Click me");
    fireEvent.click(button);
    expect(getByText("Count: 1")).toBeInTheDocument();
    fireEvent.click(button);
    expect(getByText("Count: 2")).toBeInTheDocument();
  });
});

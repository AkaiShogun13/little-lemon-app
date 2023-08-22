import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button component", () => {
    test("renders button with correct title", () => {
        const title = "Click me";
        render(<Button title={title} />)
        const buttonElem = screen.getByText(title);
        expect(buttonElem).toBeInTheDocument();
    });

});
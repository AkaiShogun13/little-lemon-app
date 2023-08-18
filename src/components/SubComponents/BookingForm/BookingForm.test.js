import BookingForm from "./BookingForm";
import {render, screen} from "@testing-library/react";
import React from "react";
import { mockComponent } from "react-dom/test-utils";

test("Renders the BookingForm headings",() => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Make A Reservation");
    expect(headingElement).toBeInTheDocument();
});

test("Render the BookingForm component",() => {

    const mockDispatchOnDateChange = jest.fn();
    const availableTimes = ["17:00", "18:00", "19:00", "20:00"];
    const mockOnFormSubmit = jest.fn();

    render(
        <BookingForm
            onFormSubmit={mockOnFormSubmit}
            isFormSubmitted={false}
            dispatchOnDateChange={mockDispatchOnDateChange}
            availableTimes={availableTimes}
        />
    );
})

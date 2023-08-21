import BookingForm from "./BookingForm";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom"

test("Renders the BookingForm headings",() => {
    const headingElement = screen.getByText("Make A Reservation");
    expect(headingElement).toBeInTheDocument();
    render(<BookingForm />);
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

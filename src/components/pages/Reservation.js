import React, {useState, useReducer} from "react";
import BookingForm from "../SubComponents/BookingForm/BookingForm"
// import { useNavigate } from "react-router-dom";
import {fetchAPI} from "../icons/Api";

const Reservation = () => {

    // const navigate = useNavigate();
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const handleFormSubmit = (e, formValues) => {
        e.preventDefault();
        setIsFormSubmitted(true);
        // const areAllFieldsFilled = Object.values(formValues).every(
        //   (value) => value);
      };
      const updateTimes = (availableTimes, date) => {
        const response = fetchAPI(new Date(date));
        return response.length !== 0 ? response : availableTimes;
      };

      const initializeTimes = (initialAvailableTimes) => [
        ...initialAvailableTimes,
        ...fetchAPI(new Date()),
      ];

      const [availableTimes, dispatchOnDateChange] = useReducer(
        updateTimes,
        [],
        initializeTimes
      );

    return (
        <>
            <BookingForm
            availableTimes={availableTimes}
            dispatchOnDateChange={dispatchOnDateChange}
            onFormSubmit={handleFormSubmit}
            isFormSubmitted={isFormSubmitted}
            />
        </>
    )
}

export default Reservation
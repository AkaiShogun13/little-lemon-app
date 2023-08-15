import React, {useState} from "react"
import "./BookingForm.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../components/icons/FontAwesomeIcons';

const BookingForm = ({
    onFormSubmit,
    isFormSubmitted,
    availableTimes,
    dispatchOnDateChange
}) => {
    const defaultTime = availableTimes[0];

    const [formValues, setFormValues] = useState({
        guests: "",
        date: "",
        time: defaultTime,
        seats: "",
        occasion: "",
    })

    const handleInputChange = (e) => {
        if (e.target.name === 'date') {
          dispatchOnDateChange(e.target.value);
        }
        setFormValues({
          ...formValues,
          [e.target.name]: e.target.value,
        });
      };

    return (
        <>
        <section className="form1">
            <h1>Make A Reservation</h1>
            <form onSubmit={(e) => onFormSubmit(e, formValues)}>
                <div className="reservation-container">
                    <label htmlFor="guests" className="item-title">
                        <span className="label-icon">
                            <FontAwesomeIcon icon="fa-regular fa-user" style={{color: "#628470",}} />
                        </span>
                        Guests
                    </label>
                    <select
                            id="guests"
                            name="guests"
                            placeholder="No. of guests"
                            onChange={handleInputChange}
                            className={isFormSubmitted && !formValues.occasion ? "error" : ""}
                        >
                            <option value="" disabled selected>No. of guests</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                    </select>
                </div>
                <div className="reservation-container">
                    <label htmlFor="date" className="item-title">
                        <span className="label-icon">
                            <FontAwesomeIcon icon="fa-regular fa-calendar" style={{color: "#628470",}} />
                        </span>
                        Date
                    </label>
                    <input
                            type="date"
                            id="date"
                            name="date"
                            onChange={handleInputChange}
                            className={isFormSubmitted && !formValues.date ? "error" : ""}
                    />
                </div>
                <div className="reservation-container">
                    <label htmlFor="time" className="item-title">
                        <span className="label-icon">
                            <FontAwesomeIcon icon="fa-regular fa-clock" style={{color: "#628470",}} />
                        </span>
                        Time
                    </label>
                    <select
                            id="time"
                            name="time"
                            value={formValues.time}
                            onChange={handleInputChange}
                            className={isFormSubmitted && !formValues.time ? "error" : ""}
                        >
                            {availableTimes.map(time =>
                                <option key={time}>
                                {time}
                                </option>
                            )}
                    </select>
                </div>
                <div className="reservation-container">
                    <label htmlFor="seats" className="item-tile">
                        <span className="label-icon">
                            <FontAwesomeIcon icon="fa-solid fa-chair" style={{color: "#628470",}} />
                        </span>
                    </label>
                    <select
                            id="seats"
                            name="seats"
                            onChange={handleInputChange}
                            className={isFormSubmitted && !formValues.seats ? "error" : ""}
                        >
                            <option value="" disabled selected>Seats</option>
                            <option value="outdoor">Outdoor</option>
                            <option value="indoor">Indoor</option>
                    </select>
                </div>
                <div className="reservation-container">
                    <label htmlFor="occasion" className="item-tile">
                        <span className="label-icon">
                            <FontAwesomeIcon icon="fa-solid fa-martini-glass" style={{color: "#628470",}} />
                        </span>
                    </label>
                    <select
                            id="occasion"
                            name="occasion"
                            onChange={handleInputChange}
                            className={isFormSubmitted && !formValues.occasion ? "error" : ""}
                        >
                            <option value="" disabled selected>Occasion</option>
                            <option value="birthday">Birthday</option>
                            <option value="engagement">Engagement</option>
                            <option value="anniversary">Anniversary</option>
                    </select>
                </div>
            </form>
        </section>
        <section className="form2">
            <h1>Your Details</h1>
            <form></form>
        </section>
        <button>Submit</button>
        </>
    )
}

export default BookingForm
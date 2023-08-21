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
            name: "",
            phone: "",
            email: "",
            textarea: "",
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

        const handleClick = (e) => {
            e.preventDefault()
        }

        return (
            <>
            <section className="form form1">
                <h1>Make A Reservation</h1>
                <form onSubmit={(e) => onFormSubmit(e, formValues)}>
                    <div className="reservation-container">
                        <label for="guests" className="item-title item1-title">
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
                            className={isFormSubmitted && !formValues.occasion ? "error" : ""}>

                            <option value="" disabled selected>No. of guests</option>
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
                        <label for="date" className="item-title item1-title">
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
                            className={isFormSubmitted && !formValues.date ? "error" : ""} />
                    </div>
                    <div className="reservation-container">
                        <label for="time" className="item-title item1-title">
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
                            className={isFormSubmitted && !formValues.time ? "error" : ""}>

                            {availableTimes.map(time =><option key={time}>{time}</option>)}
                        </select>
                    </div>
                    <div className="btn-layout">
                    <div className="reservation-container">
                        <label for="seats" className="item-title btn-layout-item" >
                            <span className="label-icon">
                                <FontAwesomeIcon icon="fa-solid fa-chair" style={{color: "#628470",}} />
                            </span>
                        </label>
                        <select
                            required
                            id="seats"
                            name="seats"
                            onChange={handleInputChange}
                            className={isFormSubmitted && !formValues.seats ? "error" : ""}>

                            <option value="" disabled selected>Seats</option>
                            <option value="outdoor">Outdoor</option>
                            <option value="indoor">Indoor</option>
                        </select>
                    </div>
                    <div className="reservation-container">
                        <label for="occasion" className="item-title btn-layout-item">
                            <span className="label-icon">
                                <FontAwesomeIcon icon="fa-solid fa-martini-glass" style={{color: "#628470",}} />
                            </span>
                        </label>
                        <select
                            id="occasion"
                            name="occasion"
                            onChange={handleInputChange}
                            className= {isFormSubmitted && !formValues.occasion ? "error" : ""}>

                            <option value="" disabled selected>Occasion</option>
                            <option className="occasion-item" value="birthday">Birthday</option>
                            <option className="occasion-item" value="engagement">Engagement</option>
                            <option className="occasion-item"value="anniversary">Anniversary</option>
                        </select>
                    </div>
                    </div>
                </form>
            </section>
            <section className="form form2">
                <h1>Your Details</h1>
                <form method="post" onSubmit={(e) => onFormSubmit(e, formValues)}>
                    <div className="reservation-container">
                        <label for="your-name" className="item-title item2-title item2-name">Name *</label>
                        <input
                            required
                            minLength={3}
                            autoComplete="name"
                            type="text"
                            id="your-name"
                            name="name"
                            placeholder="Name"
                            className={isFormSubmitted && !formValues.name ? "error" : ""}>
                        </input>
                    </div>
                    <div className="reservation-container">
                        <label for="phone" className="item-title item2-title">Phone *</label>
                        <input
                            required
                            autoComplete="tel"
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Phone number"
                            className={isFormSubmitted && !formValues.phone ? "error" : ""}>
                        </input>
                    </div>
                    <div className="reservation-container">
                        <label for="email" className="item-title item2-title">Email *</label>
                        <input
                            required
                            autoComplete="email"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email address"
                            className={isFormSubmitted && !formValues.email ? "error" : ""}>
                        </input>
                    </div>
                    <div className="special-requests">
                        <label htmlFor="special-requests" className="special-title">Special Requests</label>
                        <textarea
                            id="special-requests"
                            name="textarea"
                            rows="5"
                            cols="30"
                            minLength="10"
                            maxLength="100"
                            placeholder="Add requests here..."
                            className={isFormSubmitted && !formValues.textarea ? "error" : ""}>
                        </textarea>
                    </div>
                </form>
            </section>
            <div className="btn-container">
                <button
                    className="submit-btn"
                    value="Submit"
                    type="submit"
                    onClick={handleClick}
                >
                Submit
                </button>
            </div>
            </>
        )
 }

export default BookingForm
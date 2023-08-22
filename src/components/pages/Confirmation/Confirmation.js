import React from "react";
import "./Confirmation.css"

function Confirmation() {
    return(
        <>
        <article className="container">
            <h1 className="confirmation-title">Thank you for submitting your reservation!</h1>
            <p className="confirmation-content">An email will be send to confirm your booking.</p>
        </article>
        </>
    )
}

export default Confirmation
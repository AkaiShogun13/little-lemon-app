import React from "react";
import "./Button.css";
import { useNavigate } from "react-router-dom";

function Button({title, onClick, type}) {
    const navigate = useNavigate();
    const navigateToConfirmation = () => {
        navigate("/confirmation")
    }

    // const handleClick = (e) => {
    //     if (type !== "submit") {
    //         e.preventDefault();
    //     }
    //     if(onClick) {
    //         onClick(e);
    //     }
    // };

    return(
        <button
            type={type}
            className="submit-btn"
            onClick={navigateToConfirmation}
        >
            {title}
        </button>
    )
}

export default Button;
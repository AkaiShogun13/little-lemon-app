import React from "react";
import SpecialsCard from "../../SubComponents/SpecialsCard/SpecialsCard"
import GreekSalad from "../../../assets/greek-salad.jpg"
import Bruschetta from "../../../assets/bruschetta.jpg"
import LemonDessert from "../../../assets/lemon-dessert.jpg"
import "./Specials.css"

function Specials() {
    return (
        <article className="specials-container">
            <section className="specials-top">
                <h1>Specials</h1>
                <button className="online-btn">Order online</button>
            </section>
            <section className="specials-card">
                <SpecialsCard image={GreekSalad}
                              name="Greek Salad"
                              price="$12.99"
                              description="The famous greek salad of crispy lettuce, peppers,
                                           olives and our Chicago style feta cheese,
                                           garnished with crunchy garlic and rosemary croutons." />
                <SpecialsCard image={Bruschetta}
                              name="Bruschetta"
                              price="$5.99"
                              description="Slices of bread brushed with olive oil and toasted dark on the grill,
                                           then topped with our fresh bruschetta sauce of diced plum tomatoes and garlic." />
                <SpecialsCard image={LemonDessert}
                              name="Lemon Dessert"
                              price="$5.00"
                              description="This comes straight from grandma's recipe book, every last ingredient has
                                           been sourced and is as authentic as can be imagined" />
            </section>
        </article>
    );
}

export default Specials
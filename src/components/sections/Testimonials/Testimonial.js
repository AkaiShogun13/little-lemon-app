import TestimonialsCards from "../../cards/TestimonialsCard"
import './Testimonial.css'

function Testimonial() {
    return (
        <article className="testimonials-container">
            <section className="testimonials-top">
                <h1>Testimonials</h1>
            </section>
            <section className="testimonials-cards">
                <TestimonialsCards name="Sara Lopez"
                                   description="“Seriously cannot stop thinking about the Turkish Mac n' Cheese!!”" />
                <TestimonialsCards name="Sara Lopez"
                                   description="“Seriously cannot stop thinking about the Turkish Mac n' Cheese!!”" />
                <TestimonialsCards name="Sara Lopez"
                                   description="“Seriously cannot stop thinking about the Turkish Mac n' Cheese!!”" />
                <TestimonialsCards name="Sara Lopez"
                                   description="“Seriously cannot stop thinking about the Turkish Mac n' Cheese!!”" />
            </section>
        </article>
    );
}

export default Testimonial
import Star from "../../assets/star.png"

function TestimonialsCards(props) {
    return (
        <article className="testimonial-card">
        <img src={Star}
             alt="rating icon"
             width={50}
             height={50}>
        </img>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
    </article>
    );
}

export default TestimonialsCards
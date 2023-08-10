import "./SpecialsCard.css"

 function SpecialsCard(props) {
    return (
        <article className="card-container">
            <img src={props.image}
                 alt="specials img"
                 width={264}
                 height={185}>
            </img>
            <section className="specials-content-header">
                <h2>{props.name}</h2>
                <h3>{props.price}</h3>
            </section>
            <section className="specials-content-body">
                <p>{props.description}</p>
                <button className="specials-btn">Order for delivery</button>
            </section>
        </article>
    );
}

export default SpecialsCard
import ChefImage from "../../../assets/chefs1.jpg"
import ChefImage2 from "../../../assets/chefs2.jpg"
import './About.css'

function About() {
    return (
        <article className="about-container">
            <section className="about-text">
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p className="about-description">Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario.
                Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago,
                and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers
                continue to oversee the Little Lemon restaurant, nearly thirty years later.
                </p>
            </section>
                <img className="about-img1"
                     src={ChefImage2}
                     alt="Little lemon chefs"
                     width={272}
                     height={338}></img>
                <img className="about-img2"
                     src={ChefImage}
                     alt="Little lemon chefs"
                     width={272}
                     height={338}></img>
        </article>
    )
}

export default About
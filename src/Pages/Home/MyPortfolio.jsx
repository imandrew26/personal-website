import data from "../../data/index.json"
import { Link } from "react-scroll";

export default function MyPortfolio(){
    const handleContactScroll = () => {
        document.getElementById("contactSection").scrollIntoView({ behavior: "smooth" });
    };

    return(
        <section className="portfolio--section" id="MyPortfolio">
            <div className="portfolio--container-box">
                <div className="portfolio--container">
                    <h2 className="about--section--heading">
                        Recent Projects
                    </h2>
                </div>
                <div>
                    <button className="btn btn-github"
                        onClick={() => window.open("https://github.com/imandrew26", "_blank")}>
                        <i className="fa-brands fa-github"></i>Visit My Github 
                    </button>
                </div>
            </div>
            <div className="portfolio--section--container">
                {data?.portfolio?.map((item, index) => (
                    <div key={index} className="portfolio--section--card">
                        <div className="portfolio--section--img">
                            <img src={item.src} alt="Placeholder" />
                        </div>
                        <div className="portfolio--section--card--content">
                            <div>
                                <h3 className="portfolio--section--title">{item.title}</h3>
                                <p className="text-sm">{item.description}</p>
                            </div>
                            <p className="text-sm portfolio--link">
                                {item.linkText === "Contact Me" ? (
                                    <Link
                                        to="Contact" 
                                        smooth={true} 
                                        duration={500} 
                                        offset={-40} 
                                        style={{ textDecoration: 'none', color: 'inherit'}}
                                    >
                                        {item.linkText}
                                        &nbsp;&nbsp;
                                        <i className="fa-regular fa-message"></i>
                                    </Link>
                                ) : (
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ textDecoration: 'none', color: 'inherit' }}
                                    >
                                        {item.linkText}
                                        &nbsp;&nbsp;
                                        <i className="fa-solid fa-link"></i>
                                    </a>
                                )}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

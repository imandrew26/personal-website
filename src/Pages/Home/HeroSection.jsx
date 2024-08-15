export default function HeroSection(){
    return(
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hi, I'm Andrew</p>
                    <h1 className="hero--section--title">
                        {/* <span className="hero--section--title--color"> */}
                        Aspiring
                        {/* </span> */}
                        <br />
                        Software Engineer
                    </h1>
                    <p className="hero--section--description">
                        I'm a student studying computer science + business
                        <br />
                        at the University of Michigan.
                    </p>
                </div>
                <button className="btn btn-primary"> Get in Touch </button>
            </div>
            <div className = "hero--section--img">
                <img src = "./img/headshot.png" alt = "Hero Headshot" />
            </div>
        </section>
    );
}
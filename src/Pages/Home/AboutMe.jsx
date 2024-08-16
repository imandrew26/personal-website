
export default function AboutMe() {
    return (
      <section id="AboutMe" className="about--section">
        <div className="about--section--img">
          <img src="./img/about-me-fishing.png" alt="About Me" />
        </div>
        <div className="hero--section--content--box about--section--box">
          <div className="hero--section--content">
            <h2 className="skills-section--heading">About Me</h2>
            <p className="hero--section--description">
                Hi, my name is Andrew Wang — I'm a student at the University of Michigan
                studying computer science and business. I enjoy using programming as a
                creative outlet, where I can bring my ideas to life and solve problems.
            </p>
            <p className="hero--section--description">
                In school, I'm involved in Michigan Data Science, Alternative Investments Club, 
                and Phi Gamma Nu professional fraternity.
            </p>
            <p className="hero--section--description">
                I spend my free time playing tennis and pickleball, discovering 
                new music, fishing (pictured left), and hanging out with friends. I'm also very competitive when
                it comes to video games.
            </p>
            <p className="hero--section--description">
                Thanks for visiting my website!
            </p>
          </div>
        </div>
      </section>
    );
  }
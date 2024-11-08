import {useState, useEffect} from "react"
import {Link} from "react-scroll"

function Navbar() {
    const[navActive, setNavActive] = useState(false);
    const toggleNav = () => {
        setNavActive(!navActive)
    }
    const closeMenu = () => {
        setNavActive(false)
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 500) {
                closeMenu;
            }
        };
    
        window.addEventListener("resize", handleResize);
    
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    
    useEffect(() => {
        if (window.innerWidth <= 1200) {
            closeMenu;
        }
    }, []);
    
      return (
        <nav className={`navbar ${navActive ? "active" : ""}`}>
          <div className="box navbar_left">
            <div className="navbar--logo">
              <img src="./img/fullname-logo.png" alt="logo" />
            </div>
          </div>
          <a
            className={`nav__hamburger ${navActive ? "active" : ""}`}
            onClick={toggleNav}
          >
            <span className="nav__hamburger__line"></span>
            <span className="nav__hamburger__line"></span>
            <span className="nav__hamburger__line"></span>
          </a>
          <div className="box navbar_center">
           <div className={`navbar--items ${navActive ? "active" : ""}`}>
              <ul>
                <li>
                  <Link
                    onClick={closeMenu}
                    activeClass="navbar--active-content"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration ={500}
                    to="heroSection"
                    className="navbar--content"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={closeMenu}
                    activeClass="navbar--active-content"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    to="AboutMe"
                    className="navbar--content"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={closeMenu}
                    activeClass="navbar--active-content"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    to="MyPortfolio"
                    className="navbar--content"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={closeMenu}
                    activeClass="navbar--active-content"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    to="Contact"
                    className="navbar--content"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="box navbar_right">
            <a
                  href="/AndrewWang_Resume.pdf"
                  className="btn btn-outline-primary"
                  target="_blank"
                  rel="noopener noreferrer"
              >
              <i className="fa-solid fa-file-arrow-down"></i>&nbsp;&nbsp; My Resume
            </a>
          </div>
        </nav>
      );
    }
    
export default Navbar;
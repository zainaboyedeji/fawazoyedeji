import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./mobilenav.scss";

function MobileNav() {
    return (
        <div className="mobilenav">
            <div className="mobilenav-wrap">
               
                <nav>
                    <ul>
                        <li className="category">
                            <Link to="/">lagos. nigeria</Link>
                        </li>

                        <li className="item">
                            <Link to="/">home</Link>
                        </li>
                        <li className="item">
                            <Link to="/yours-in-arm">yours in arm</Link>
                        </li>
                        <li className="item">
                            <Link to="/endsars-awakening">awakening</Link>
                        </li>
                        <li className="item">
                            <Link to="/otto-daily">otto daily</Link>
                        </li>
                        <li className="item">
                            <Link to="/repository">repository</Link>
                        </li>
                        <li className="item">
                            <Link to="/">.</Link>
                        </li>
                        <li className="item">
                            <Link to="/about">about</Link>
                        </li>
                        <li className="item">
                            <Link to="/contact">contact</Link>
                        </li>
                    </ul>

                    <div className="social-links">
                        <a href="https://www.instagram.com/fawaz.oyedeji/" target="_blank" rel="noreferrer" title="Instagram">
                            <FaInstagram />
                        </a>
                        <a href="https://www.instagram.com/fawaz.oyedeji/" target="_blank" rel="noreferrer" title="Twitter">
                            <FaTwitter />
                        </a>
                        <a href="https://www.instagram.com/fawaz.oyedeji/" target="_blank" rel="noreferrer" title="LinkedIn">
                            <FaLinkedin />
                        </a>
                        <a href="https://www.instagram.com/fawaz.oyedeji/" target="_blank" rel="noreferrer" title="Youtube">
                            <FaYoutube />
                        </a>
                        <a href="https://www.instagram.com/fawaz.oyedeji/" target="_blank" rel="noreferrer" title="Share">
                            <FaShareAlt />
                        </a>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default MobileNav;

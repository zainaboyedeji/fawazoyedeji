import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaShareAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./mobilenav.scss";

function MobileNav() {
    return (
        <div className="mobilenav">
            <div className="mobilenav-wrap">
               
                <nav>
                    <ul>
                        <li className="category">
                            <NavLink to="/" activeClassName="active">
                                lagos. nigeria
                            </NavLink>
                        </li>

                        <li className="item">
                            <NavLink to="/" activeClassName="active">
                                home
                            </NavLink>
                        </li>
                        <li className="item">
                            <NavLink to="/yours-in-arm" activeClassName="active">
                                yours in arm
                            </NavLink>
                        </li>
                        <li className="item">
                            <NavLink to="/endsars-awakening" activeClassName="active">
                                awakening
                            </NavLink>
                        </li>
                        <li className="item">
                            <NavLink to="/otto-daily" activeClassName="active">
                                otto daily
                            </NavLink>
                        </li>
                        <li className="item">
                            <NavLink to="/repository" activeClassName="active">
                                repository
                            </NavLink>
                        </li>
                        <li className="item">
                            <NavLink to="/" activeClassName="active">
                                .
                            </NavLink>
                        </li>
                        <li className="item">
                            <NavLink to="/about" activeClassName="active">
                                about
                            </NavLink>
                        </li>
                        <li className="item">
                            <NavLink to="/contact" activeClassName="active">
                                contact
                            </NavLink>
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

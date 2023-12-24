import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaShareAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./sidebar.scss";

function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebar-wrap">
                <h1 className="logo long-text">
                    <NavLink to="/" activeclassname="active">
                        FAWAZ <br /> OYEDEJI.
                    </NavLink>
                </h1>
                <nav>
                    <ul>
                        <li className="category">
                            <NavLink to="/" activeclassname="active">
                                lagos. nigeria
                            </NavLink>
                        </li>

                        <li className="item">
                            <NavLink to="/" activeclassname="active">
                                home
                            </NavLink>
                        </li>
                        <li className="item">
                            <NavLink to="/yoursinarms" activeclassname="active">
                                yours in arms
                            </NavLink>
                        </li>
                        <li className="item">
                            <NavLink to="/endsars-awakening" activeclassname="active">
                                awakening
                            </NavLink>
                        </li>
                        <li className="item">
                            <NavLink to="/otto-daily" activeclassname="active">
                                otto daily
                            </NavLink>
                        </li>
                        <li className="item hidden">
                            <NavLink to="/commissions" activeclassname="active">
                                commissions
                            </NavLink>
                        </li>
                        <li className="item">
                            <NavLink to="/" activeclassname="active">
                                .
                            </NavLink>
                        </li>
                        <li className="item">
                            <NavLink to="/about" activeclassname="active">
                                about
                            </NavLink>
                        </li>
                        <li className="item">
                            <NavLink to="/contact" activeclassname="active">
                                contact
                            </NavLink>
                        </li>
                    </ul>

                    <div className="social-links">
                        <a href="https://www.instagram.com/fawaz.oyedeji/" target="_blank" rel="noreferrer" title="Instagram">
                            <FaInstagram />
                        </a>
                        <a href="https://twitter.com/fawazoyedeji/" target="_blank" rel="noreferrer" title="Twitter">
                            <FaTwitter />
                        </a>
                        <a href="https://www.linkedin.com/in/fawazoyedeji" target="_blank" rel="noreferrer" title="LinkedIn">
                            <FaLinkedin />
                        </a>
                        <a href="https://www.youtube.com/channel/UCM_TTJSaVbQlfetUfYvXf_w" target="_blank" rel="noreferrer" title="Youtube">
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

export default SideBar;
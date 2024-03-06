import React, { useEffect } from "react";
import MobileHead from "../../components/mobile_head";
import { Link } from "react-router-dom";

import { projectsPage } from "../../config/constants";
import "./projects.scss";
import Footer from "../../components/footer";

function Projects() {
    useEffect(() => {
        document.body.classList.toggle('overflow-hidden', true);
        return () => { document.body.classList.toggle('overflow-hidden', false); }
    }, []);
    return (
        <>
            <div className="projects">
                <MobileHead />
                <div className="flex flex-wrap w-full next">
                    {projectsPage.map((page, index) => (
                        <Link to={`/projects/${page.id}`} className="w-1/4 pr-5 mt-5">
                            <div>
                                <img src={page.src} alt="GF1" />
                            </div>
                            <p className="text-center pt-2">{page.text}</p>
                        </Link>
                    ))}
                </div>

            </div>
            <div className="projectsFooter">
                <Footer />
            </div>
        </>
    );
}

export default Projects;

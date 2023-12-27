import React from "react";
import MobileHead from "../../components/mobile_head";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { projectsPage } from "../../config/constants";
import "./projects.scss";

function Projects() {
    return (
        <div className="projects">
            <MobileHead />
            <div className="flex flex-wrap w-full next">
                {projectsPage.map((page, index) => (
                    <Link to={`/projects/${page.id}`} className="w-1/4 pr-5">
                            <div>
                                <LazyLoadImage src={page.src} alt="GF1"/>
                            </div>
                            <p className="text-center pt-2">{page.text}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Projects;

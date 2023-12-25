import React from "react";
import MobileHead from "../../components/mobile_head";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { projectsPage } from "../../config/constants";

function Projects() { 
    return (
        <div className="commissions">
            <MobileHead />
            <div className="flex flex-wrap w-full commissionImage">
                {projectsPage.map((page, index) => (
                    <div className="w-1/4 h-auto pl-7 pr-7 mt-2 first">
                        <Link to={`/projects/${page.id}`}>
                        <LazyLoadImage src={page.src} alt="GF1" /> <p>{page.text}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;

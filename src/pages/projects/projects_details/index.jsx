import React from "react";
import MobileHead from "../../../components/mobile_head";
import { useParams } from 'react-router-dom';
import { projectsPage } from "../../../config/constants";
import { LazyLoadImage } from "react-lazy-load-image-component";

function ProjectsDetails() {
    let { id } = useParams();
    const found = projectsPage.find(function (item) {
        return item.id === id
      });
    return (
        <div className="commissions_images">
           <MobileHead />
            <div className="">

            <div>
                {found?.description}
            </div>
                {found?.items.map((page, index) => (
                    <div className="">
                        <div>
                        <LazyLoadImage src={page.src} alt="GF1" className="h-full" /> <p>{page.text}</p>
                        </div>
                    </div>
                ))}
            </div>
    
        </div>
    );
}

export default ProjectsDetails;

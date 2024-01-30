import React from "react";
import MobileHead from "../../../components/mobile_head";
import { useParams } from "react-router-dom";
import { projectsPage } from "../../../config/constants";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./project_details.scss";
import Footer from "../../../components/footer";
import sample_image from "../../../image/about/fawaz-oyedeji.jpg";

function ProjectsDetails() {
  let { id } = useParams();
  const found = projectsPage.find(function (item) {
    return item.id === id;
  });
  return (
    <>
      <div>
        <MobileHead />
        <div className="projectDetails">
          <div className="desc">{found?.description}</div>
          {found?.items.map((page, index) => (
            <LazyLoadImage src={page.src} alt="GF1" />
          ))}

          <LazyLoadImage src={sample_image} alt="GF1" className="hidden" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProjectsDetails;

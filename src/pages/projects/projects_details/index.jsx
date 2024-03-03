import React,{useEffect} from "react";
import MobileHead from "../../../components/mobile_head";
import { useParams } from "react-router-dom";
import { projectsPage } from "../../../config/constants";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./project_details.scss";
import Footer from "../../../components/footer";

function ProjectsDetails() {
  let { id } = useParams();
  const found = projectsPage.find(function (item) {
    return item.id === id;
  });
  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', false);
    return () => {document.body.classList.toggle('overflow-hidden', true);}
  },[]);
  return (
    <>
      <div>
        <MobileHead />
        <div className="projectDetails mt-3">
          <div className="desc">{found?.description}</div>
          {found?.items.map((page, index) => (
            <LazyLoadImage src={page.src} alt="GF1" />
          ))}
        </div>
      </div>
      <div className="projectD">
        <Footer />
      </div>
    </>
  );
}

export default ProjectsDetails;

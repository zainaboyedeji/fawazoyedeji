import React,{useEffect} from "react";
import MobileHead from "../../../components/mobile_head";
import { useParams } from "react-router-dom";
import { projectsPage } from "../../../config/constants";
import "./project_details.scss";
import Footer from "../../../components/footer";

function ProjectsDetails() {
  let { id } = useParams();
  const found = projectsPage.find(function (item) {
    return item.id === id;
  });
  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', true);
    return () => {document.body.classList.toggle('overflow-hidden', false);}
  },[]);
  return (
    <>
      <div>
        <MobileHead />
        <div className="projectDetails mt-3">
          <div className="desc mr-5">{found?.description}</div>
          {found?.items.map((page, index) => (
            <img src={page.src} alt="GF1" className="mr-20" />
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

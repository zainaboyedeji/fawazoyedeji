import { Routes, Route } from "react-router-dom";
import SideBar from "../components/sidebar";
import Contact from "./contact";
import About from "./about_me";
import LandingPage from "./landing_page";
import CVPage from "./cv_page";
import Projects from "./projects";
import Multimedia from "./multimedia";
import TearSheet from "./tearsheet";
import ProjectsDetails from "./projects/projects_details/index";
import Commissions from "./commissions";
import CommissionsDetails from "./commissions/commissions_details/index";
import "./pages.scss";

function MainView() {
    return (
       <div className="wrap">
        <div className="flex head">
           <SideBar />
            <div className="routes">
                 <Routes>
                     <Route path="/" element={<LandingPage/>} />
                     <Route path="/home" element={<LandingPage/>} />
                     <Route path="/projects" element={<Projects/>} />
                     <Route path="/projects/:id" element={<ProjectsDetails/>} />
                     <Route path="/commissions" element={<Commissions/>} />
                     <Route path="/commissions/:id" element={<CommissionsDetails/>} />
                     <Route path="/contact" element={<Contact />} />
                     <Route path="/about" element={<About/>} />
                     <Route path="/multimedia" element={<Multimedia/>} />
                     <Route path="/tearsheet" element={<TearSheet/>} />
                     <Route path="/cv" element={<CVPage/>} />
\
                </Routes> 
            </div>
        </div>
       </div>
    );
}

export default MainView;

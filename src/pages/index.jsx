import { Routes, Route } from "react-router-dom";
import SideBar from "../components/sidebar";
import Contact from "./contact";
import About from "./about_me";
import LandingPage from "./landing_page";
import Commissions from "./commissions";
import Footer from "../components/footer";
import CommissionsImages from "./commissions/commissions_images";
import CommissionsDetails from "./commissions/commission_details";
import CVPage from "./cv_page";
import Projects from "./projects";
import ProjectsDetails from "./projects/projects_details/index";
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
                     <Route path="/contact" element={<Contact />} />
                     <Route path="/about" element={<About/>} />
                     <Route path="/cv" element={<CVPage/>} />
                     <Route path="/commissions" element={<Commissions/>} />
                     <Route path="/commissions/:id" element={<CommissionsImages/>} />
                     <Route path="/commissions/details/:id/:inner" element={<CommissionsDetails/>} />
                </Routes> 
            </div>
        </div>
       </div>
    );
}

export default MainView;

import { Routes, Route } from "react-router-dom";
import Yoursinarm from "./yours_in_arm";
import Awakening from "./awakening";
import SideBar from "../components/sidebar";
import Contact from "./contact";
import About from "./about_me";
import LandingPage from "./landing_page";
import Commissions from "./commisi/commissions";
import OttoDaily from "./otto_daily";
import Footer from "../components/footer";
import CommissionsImages from "./commisi/commissions_images";
import CommissionsDetails from "./commisi/commission_details";
import CVPage from "./cv_page";
import Projects from "./projects";
import ProjectsDetails from "./projects/projects_details/index";
import "./pages.scss";

function MainView() {
    return (
       <div className="wrap">
        <div className="d-flex head">
           <SideBar />
            <div className="routes">
                 <Routes>
                     <Route path="/" element={<LandingPage/>} />
                     <Route path="/home" element={<LandingPage/>} />
                     <Route path="/projects" element={<Projects/>} />
                     <Route path="/projects/:id" element={<ProjectsDetails/>} />
                     <Route path="/yoursinarms" element={<Yoursinarm />} />
                     <Route path="/endsars-awakening" element={<Awakening />} />
                     <Route path="/otto-daily" element={<OttoDaily/>} />
                     <Route path="/contact" element={<Contact />} />
                     <Route path="/about" element={<About/>} />
                     <Route path="/cv" element={<CVPage/>} />
                     <Route path="/commissions" element={<Commissions/>} />
                     <Route path="/commissions/:id" element={<CommissionsImages/>} />
                     <Route path="/commissions/details/:id/:inner" element={<CommissionsDetails/>} />
                </Routes> 
                <Footer/>
            </div>
        </div>
       </div>
    );
}

export default MainView;

import { Routes, Route } from "react-router-dom";
import Yoursinarm from "./yours_in_arm";
import Awakening from "./awakening";
import SideBar from "../components/sidebar";
import Contact from "./contact";
import About from "./about_me";
import LandingPage from "./landing_page";
import Commissions from "./commissions";
import OttoDaily from "./otto_daily";
import Footer from "../components/footer";
import "./pages.scss";
import CommissionsImages from "./commissions_images";
import CommissionsDetails from "./commission_details";

function MainView() {
    return (
       <div className="wrap">
        <div className="d-flex head">
           <SideBar />
            <div className="routes">
                 <Routes>
                     <Route path="/" element={<LandingPage/>} />
                     <Route path="/home" element={<LandingPage/>} />
                     <Route path="/yoursinarms" element={<Yoursinarm />} />
                     <Route path="/endsars-awakening" element={<Awakening />} />
                     <Route path="/otto-daily" element={<OttoDaily/>} />
                     <Route path="/contact" element={<Contact />} />
                     <Route path="/about" element={<About/>} />
                     <Route path="/commissions" element={<Commissions/>} />
                     <Route path="/commissions/images" element={<CommissionsImages/>} />
                     <Route path="/commissions/details" element={<CommissionsDetails/>} />
                </Routes> 
                <Footer/>
            </div>
        </div>
       </div>
    );
}

export default MainView;

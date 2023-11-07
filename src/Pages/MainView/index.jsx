import { Routes, Route } from "react-router-dom";
import Yoursinarm from "./Yoursinarm";
import Awakening from "./Awakening";
import SideBar from "../../Components/SideBar";
import Contact from "./Contact";
import About from "./AboutMe";
import LandingPage from "./LandingPage";
import Commissions from "./Commissions";
import OttoDaily from "./OttoDaily";
import Footer from "../../Components/Footer";
import "./mainview.scss";

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
                </Routes> 
                <Footer/>
            </div>
        </div>
       </div>
    );
}

export default MainView;

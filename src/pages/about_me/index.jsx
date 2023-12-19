import fawwaz from "../../image/6_about&contact/fawazoyedeji.png";
import MobileHead from "../../components/mobile_head";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import "./about_me.scss";


function AboutMe() {
  return (
    <div className="aboutme">
      <MobileHead />
      <div className="d-flex first">
        <div className="avatar">
          <LazyLoadImage src={fawwaz} alt="fawwaz" />
        </div>
        <div className="next">
          <p>
            Fawaz Oyedeji is a documentary photographer and historian based in Lagos, Nigeria. He has a background in Mass Communication, having studied at the Yaba College of Technology in Nigeria. He recently completed a B.A.E in History Education at the University of Lagos in Nigeria. Currently, he is furthering his skills in the field of photojournalism and documentary photography through the Photojournalism and Documentary Photograph Program at the Market Photo Workshop in South Africa.
          </p>
          <p>
            As a photojournalist, Fawaz is very motivated to keep records. He believes it’s extremely significant to record daily life and even now and then, the seemingly mundane, not just for a superior awareness and understanding of our times, but for individuals in the future to be able to reflect on who they are and how they got there.
          </p>
          <p>
            Fawaz's outstanding photography has secured commissions from prominent publications and organizations like The Financial Times, Sahelein.com, ICLEI – Local Governments for Sustainability, and the World Food Programme. His work has been exhibited in global locations, including Lagos, New York, Kigali, and Germany. Recognized for his exceptional talent and dedication, Fawaz has received multiple grants and awards, including the Eugene Smith Memorial Fund Student Grant in 2019, the Bronx Documentary Center/DC Grant in 2020, and the Daniele Tamagni Grant in 2021 for his project "Yours In Arms." In 2023, he was honored with the Prince Claus Fund Seed Awards.
          </p>

          <p>View full CV <Link to="/cv">here</Link></p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;

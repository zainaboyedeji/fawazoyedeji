import React,{useEffect} from "react";
import fawwaz from "../../image/about/fawaz-oyedeji.jpg";
import MobileHead from "../../components/mobile_head";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import "./about_me.scss";
import Footer from "../../components/footer";

function AboutMe() {
    useEffect(() => {
        document.body.classList.toggle('overflow-hidden', false);
        return () => {document.body.classList.toggle('overflow-hidden', true);}
      },[]);
    return (
        <>
            <div className="aboutme">
                <MobileHead />
                <div className="flex first">
                    <div className="avatar">
                        <LazyLoadImage src={fawwaz} alt="fawwaz" />
                    </div>
                    <div className="next">
                        <p>
                            Fawaz Oyedeji is a documentary photographer and historian based in Lagos, Nigeria. He holds a background in Mass Communication from Yaba College of Technology and a B.A.E in History Education from the University of Lagos. Recently, he graduated from the Market Photo Workshop in South Africa.
                        </p>

                        <p>
                            Fawaz's primary focus with his artistic work revolves around exploring political expression in Africa. In broader terms, he examines how people interact with power. In a cultural society, power is not just a repressive force but an active one that operates at different levels and instances within social structures—such as political power, social class, institutions, and events. Power shapes reality by assigning roles to individuals and, in a sense, molds certain types of people. It also constructs narratives for people, influencing how they engage with and fit into those narratives.
                        </p>

                        <p>
                            Fawaz’s work has been commissioned by notable publications and organizations such as The Financial Times, Sahelein.com, ICLEI – Local Governments for Sustainability, and the UN World Food Programme. His photography has been exhibited globally, with showings in Lagos, New York, Kigali, and Germany. He has been the recipient of grants and awards, including the Eugene Smith Memorial Fund Student Grant in 2019, the Bronx Documentary Center/DC Grant in 2020, and the Daniele Tamagni Grant in 2021 for his project "Yours In Arms." In 2023, he was honored with the Prince Claus Fund Seed Awards.

                        </p>

                        <p>
                            View full CV <Link to="/cv">here</Link>
                        </p>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    );
}

export default AboutMe;

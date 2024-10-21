import React from "react";
import fawwaz from "../../image/about/fawaz-oyedeji.jpg";
import MobileHead from "../../components/mobile_head";
import { Link } from "react-router-dom";
import "./about_me.scss";
import Footer from "../../components/footer";

function AboutMe() {
  return (
    <>
      <div className="aboutme">
        <MobileHead />
        <div className="flex first">
          <div className="avatar">
            <img src={fawwaz} alt="fawwaz" />
          </div>
          <div className="next">
            <p className="mb-5">
              Fawaz Oyedeji is a documentary photographer, photojournalist, and
              historian from Nigeria whose work centers on exploring political
              expression in Africa. His work examines how people interact with
              power, understanding it not just as a repressive force but as one
              that operates actively within various levels of social structures,
              such as political authority, social class, institutions, and
              events.
            </p>

            <p className="mb-5">
              He holds a background in  
              <span className="bold-text ml-1 mr-1">
                 Mass Communication from Yaba College of Technology
              </span>
              and studied
              <span className="ml-1 mr-1 bold-text">
                History Education at the University of Lagos
              </span>
              . In 2023, he graduated from the
              <span className="bold-text ml-1 mr-1">
                Market Photo Workshop in South Africa,
              </span>
              further refining his photojournalism and documentary practice.
            </p>

            <p className="mb-5">
              Fawaz’s work, which covers themes such as the rise of private
              security companies, the role of political posters during
              elections, protests against police violence, and the lives of
              student cadets, has been published in
              <span className="bold-text"> The Financial Times, Les Echos </span>
              and exhibited globally, earning him grants, awards, and
              commissions from prestigious organizations like the 
              <span className="bold-text ml-1 mr-1">
                 W. Eugene Smith Fund, Prince Claus Fund, Christian Dior Parfums,
                Daniele Tamagni Foundation, UN WFP, Architectural Review, Magnum
                Photos, and Agence France-Presse (AFP),
              </span>
              etc.
            </p>

            <p>
              View CV <Link to="/cv">here</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="aboutFooter">
        <Footer />
      </div>
    </>
  );
}

export default AboutMe;

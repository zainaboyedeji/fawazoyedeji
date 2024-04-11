import React, { useEffect } from "react";
import "./commissions.scss";
import MobileHead from "../../components/mobile_head";
import { Link } from "react-router-dom";
 
import { commissionsPage } from "../../config/constants";
import Footer from "../../components/footer";

function Commissions() {
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", false);
    return () => {
      document.body.classList.toggle("overflow-hidden", true);
    };
  }, []);
  return (
    <>
      <div className="commissions">
        <MobileHead />
        <div className="flex flex-wrap w-full next">
          {commissionsPage.map((page, index) => (
            <Link to={`/commissions/${page.id}`} className="w-1/4 pr-5">
              <div className="w-26 h-26">
                <img src={page.src} alt="GF1" className="w-full h-full"/>
              </div>
              <p className="text-center pt-2">{page.text}</p>
            </Link>
          ))}
        </div>
      </div>
      <div className="commissionsFooter">
        <Footer />
      </div>
    </>
  );
}

export default Commissions;

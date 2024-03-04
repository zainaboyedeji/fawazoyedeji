import React, { useEffect } from "react";
import one from "../../image/home/001.jpg";
import two from "../../image/home/002.jpg";
import three from "../../image/home/003.jpg";
import four from "../../image/home/004.jpg";
import five from "../../image/home/005.jpg";
import six from "../../image/home/006.jpg";
import seven from "../../image/home/007.jpg";
import eight from "../../image/home/008.jpg";
import nine from "../../image/home/009.jpg";
import ten from "../../image/home/010.jpg";
import eleven from "../../image/home/011.jpg";
import twelve from "../../image/home/012.jpg";
import MobileHead from "../../components/mobile_head";
 
import Footer from "../../components/footer/index";
import "./landing_page.scss";

function LandingPage() {
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", false);
    return () => {
      document.body.classList.toggle("overflow-hidden", true);
    };
  }, []);
  return (
    <>
      <div className="land">
        <MobileHead />

        <div className="allImg">
          <img src={one} alt="One" />
        </div>
        <div className="allImg">
          <img src={two} alt="Two" />
        </div>
        <div className="allImg">
          <img src={three} alt="Three" />
        </div>
        <div className="allImg">
          <img src={four} alt="Four" />
        </div>
        <div className="allImg">
          <img src={five} alt="Five" />
        </div>
        <div className="allImg">
          <img src={six} alt="Six" />
        </div>
        <div className="allImg">
          <img src={seven} alt="Seven" />
        </div>
        <div className="allImg">
          <img src={eight} alt="Eight" />
        </div>
        <div className="allImg">
          <img src={nine} alt="Nine" />
        </div>
        <div className="allImg">
          <img src={ten} alt="Ten" />
        </div>
        <div className="allImg">
          <img src={eleven} alt="Eleven" />
        </div>
        <div className="allImg">
          <img src={twelve} alt="Twelve" />
        </div>
      </div>
      <div className="landPage">
        <Footer />
      </div>
    </>
  );
}

export default LandingPage;

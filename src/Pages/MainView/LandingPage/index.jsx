import * as React from "react";
import one from "../../../image/1home/001.jpg";
import two from "../../../image/1home/002.jpg";
import three from "../../../image/1home/003.jpg";
import four from "../../../image/1home/004.jpg";
import five from "../../../image/1home/005.jpg";
import six from "../../../image/1home/006.jpg";
import seven from "../../../image/1home/007.jpg";
import eight from "../../../image/1home/008.jpg";
import nine from "../../../image/1home/009.jpg";
import ten from "../../../image/1home/010.jpg";
import eleven from "../../../image/1home/011.jpg";
import twelve from "../../../image/1home/012.jpg";
import MobileHead from "../../../Components/MobileHead";
import "./landingpage.scss";

function LandingPage() {
  return (
    <div className="land">
      <MobileHead/>

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
  );
}

export default LandingPage;

import React,{useEffect} from "react";
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
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./landing_page.scss";

function LandingPage() {

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', false);
    return () => {document.body.classList.toggle('overflow-hidden', true);}
  },[]);
  return (
    <div className="land">
      <MobileHead/>

      <div className="allImg">
        <LazyLoadImage src={one} alt="One" />
      </div>
      <div className="allImg">
        <LazyLoadImage src={two} alt="Two" />
      </div>
      <div className="allImg">
        <LazyLoadImage src={three} alt="Three" />
      </div>
      <div className="allImg">
        <LazyLoadImage src={four} alt="Four" />
      </div>
      <div className="allImg">
        <LazyLoadImage src={five} alt="Five" />
      </div>
      <div className="allImg">
        <LazyLoadImage src={six} alt="Six" />
      </div>
      <div className="allImg">
        <LazyLoadImage src={seven} alt="Seven" />
      </div>
      <div className="allImg">
        <LazyLoadImage src={eight} alt="Eight" />
      </div>
      <div className="allImg">
        <LazyLoadImage src={nine} alt="Nine" />
      </div>
      <div className="allImg">
        <LazyLoadImage src={ten} alt="Ten" />
      </div>
      <div className="allImg">
        <LazyLoadImage src={eleven} alt="Eleven" />
      </div>
      <div className="allImg">
        <LazyLoadImage src={twelve} alt="Twelve" />
      </div>
    </div>
  );
}

export default LandingPage;

import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./repository.scss";
import one from "../../../image/5repository/ESSAY/001.jpeg";
import two from "../../../image/5repository/ESSAY/002.jpeg";
import three from "../../../image/5repository/ESSAY/003.jpeg";
import four from "../../../image/5repository/ESSAY/004.jpeg";
import five from "../../../image/5repository/ESSAY/005.jpeg";
import six from "../../../image/5repository/ESSAY/006.jpeg";
import seven from "../../../image/5repository/ESSAY/007.jpeg";
import eight from "../../../image/5repository/ESSAY/008.jpeg";
import nine from "../../../image/5repository/ESSAY/009.jpeg";
import ten from "../../../image/5repository/ESSAY/010.jpeg";
import eleven from "../../../image/5repository/ESSAY/011.jpeg";

function Repository() {
  const [count, setCount] = useState(0);
  return (
    <div className="repository">
      <div className="first">
        <h1 className="long-text">
          <Link to="/">ESSAY : a widespread phase too.</Link>
        </h1>
        <p>July 30,2020</p>
        <div className="second">
          <div className="nuk">
            <img src={one} alt="one" />
          </div>
          <div className="images">
            <img src={one} alt="one" />
            <img src={two} alt="two" />
            <img src={three} alt="three" />
            <img src={four} alt="four" />
            <img src={five} alt="five" />
            <img src={six} alt="six" />
            <img src={seven} alt="seven" />
            <img src={eight} alt="eight" />
            <img src={nine} alt="nine" />
            <img src={ten} alt="ten" />
            <img src={eleven} alt="eleven" />
          </div>
        </div>
        <div>
          <h4>Date: 22/01/2020 - 13/06/2020. </h4>
          <h4>Location: Lagos, Kogi - Nigeria.</h4>
          <h4>
            Short Description: Daily life as experienced in the early days of
            the corona pandemic.
          </h4>
          <h4>Creator: Fawaz D. Oyedeji</h4>
          <h4>Custodian: Fawaz D. Oyedeji </h4>
          <h4 className="mt-5">
            -Images are shot two months pre and two months post the outbreak
            declaration.
          </h4>
          <h4>-Images sequence corresponds with the date created.</h4>
        </div>
      </div>
      <div className="lineTab"></div>
      <div>
        <h1 className="long-text">
          <Link to="/">SPOT : the inferno.</Link>
        </h1>
        <p>February 15,2020</p>
        <div>
          <h4>Date: 29/01/2020 - 30/01/2020 </h4>
          <h4>Location: Lagos - Nigeria.</h4>
          <h4>Short Description: Inferno at Balogun market, Idumota.</h4>
          <h4>Creator: Fawaz D. Oyedeji</h4>
          <h4>Custodian: Fawaz D. Oyedeji </h4>
        </div>
      </div>
    </div>
  );
}

export default Repository;

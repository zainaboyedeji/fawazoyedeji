import React, { useState } from 'react';
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
import twelve from "../../../image/5repository/SPOT/001.jpeg";
import thirteen from "../../../image/5repository/SPOT/002.jpeg";
import fourteen from "../../../image/5repository/SPOT/003.jpeg";
import fifteen from "../../../image/5repository/SPOT/004.jpeg";
import sixteen from "../../../image/5repository/SPOT/005.jpeg";
import seventeen from "../../../image/5repository/SPOT/006.jpeg";
import eighteen from "../../../image/5repository/SPOT/007.jpeg";
import nineteen from "../../../image/5repository/SPOT/008.jpeg";
import twenty from "../../../image/5repository/SPOT/009.jpeg";
import twentyone from "../../../image/5repository/SPOT/010.jpeg";
import twentytwo from "../../../image/5repository/SPOT/011.jpeg";
import MobileHead from '../../../Components/MobileHead';

function Repository() {
  const images = { one, two , three , four , five , six ,seven , eight , nine , ten , eleven, twelve , thirteen , fourteen , fifteen , sixteen, seventeen ,eighteen, nineteen,twenty , twentyone, twentytwo};
  const [selected, setSelected] = useState(images.one);
  const [newSelected, setNewSelected] = useState(images.twelve);
  return (
    <div className="repository">
      <MobileHead/>
      <div className="first">
        <h1 className="long-text">
         ESSAY : a widespread phase too.
        </h1>
        <p>July 30,2020</p>
        <div className="second">
          <div className="nuk">
          <img src={selected} alt='img' />
          </div>
          <div className="images" role="button">
            <img src={one} alt="one" onClick={() => setSelected(images.one)}/>
            <img src={two} alt="two" onClick={() => setSelected(images.two)}/>
            <img src={three} alt="three" onClick={() => setSelected(images.three)}/>
            <img src={four} alt="four" onClick={() => setSelected(images.four)}/>
            <img src={five} alt="five" onClick={() => setSelected(images.five)}/>
            <img src={six} alt="six" onClick={() => setSelected(images.six)}/>
            <img src={seven} alt="seven" onClick={() => setSelected(images.seven)}/>
            <img src={eight} alt="eight" onClick={() => setSelected(images.eight)}/>
            <img src={nine} alt="nine" onClick={() => setSelected(images.nine)}/>
            <img src={ten} alt="ten" onClick={() => setSelected(images.ten)}/>
            <img src={eleven} alt="eleven" onClick={() => setSelected(images.eleven)}/>
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
      <div className='first'>
        <h1 className="long-text">
         SPOT : the inferno.
        </h1>
        <p>February 15,2020</p>
        <div className="second">
          <div className="nuk">
          <img src={newSelected} alt='img' />
          </div>
          <div className="images" role="button">
            <img src={twelve} alt="twelve" onClick={() => setNewSelected(images.twelve)}/>
            <img src={thirteen} alt="thirteen" onClick={() => setNewSelected(images.thirteen)}/>
            <img src={fourteen} alt="fourteen" onClick={() => setNewSelected(images.fourteen)}/>
            <img src={fifteen} alt="fifteen" onClick={() => setNewSelected(images.fifteen)}/>
            <img src={sixteen} alt="sixteen" onClick={() => setNewSelected(images.sixteen)}/>
            <img src={seventeen} alt="seventeen" onClick={() => setNewSelected(images.seventeen)}/>
            <img src={eighteen} alt="eighteen" onClick={() => setNewSelected(images.eighteen)}/>
            <img src={nineteen} alt="nineteen" onClick={() => setNewSelected(images.nineteen)}/>
            <img src={twenty} alt="twenty" onClick={() => setNewSelected(images.twenty)}/>
            <img src={twentyone} alt="twentyone" onClick={() => setNewSelected(images.twentyone)}/>
            <img src={twentytwo} alt="twentytwo" onClick={() => setNewSelected(images.twentytwo)}/>
          </div>
        </div>
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

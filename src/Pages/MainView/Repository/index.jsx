import { Link } from "react-router-dom";
import "./repository.scss";

function Repository() {
  return (
    <div className="repository">
      <div>
        <h1 className="long-text">
          <Link to="/">ESSAY : a widespread phase too.</Link>
        </h1>
        <p>July 30,2020</p>
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

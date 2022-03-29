import one from "../../../image/4ottodaily/001.jpg";
import two from "../../../image/4ottodaily/002.jpg";
import three from "../../../image/4ottodaily/003.jpg";
import four from "../../../image/4ottodaily/004.jpg";
import five from "../../../image/4ottodaily/005.jpg";
import six from "../../../image/4ottodaily/006.jpg";
import seven from "../../../image/4ottodaily/007.jpg";
import eight from "../../../image/4ottodaily/008.jpg";
import nine from "../../../image/4ottodaily/009.jpg";
import ten from "../../../image/4ottodaily/010.jpg";
import eleven from "../../../image/4ottodaily/011.jpg";
import twelve from "../../../image/4ottodaily/012.jpg";
import "./ottodaily.scss";

function OttoDaily() {
  return (
    <div className="ottodaily">
      <div className="first">
        <p>
          'Otto Daily' explores the complexities around how historical patterns
          like migration and religion, have reconfigured the identity of the
          indigenous Otto community in Lagos, Nigeria.
        </p>

        <p>
          Otto is located in the south of Oyingbo, Lagos. Prior to the sixteenth
          century a number of Awori, the southernmost of the Yoruba speaking
          people dispersed from Isheri, a village twelve miles up the Ogun
          River, seeking refuge from conflict. A group of them settled in
          modern-day Lagos. There they established three main settlements, Iddo,
          Lagos Island, and Otto. Overtime, Iddo and Lagos Island both expanded
          into a major international metropolitan trading centers.
        </p>

        <p>
          However, the Otto settlement still retains much of its and communal
          identity and domestic form of trade. This settlement has a tradition
          of origin that has been kept alive till today. Although mainly
          occupied by Yorubas, their customs and traditions have been redefined
          with distinct customs through the influx of people from neighboring
          states and the Nigerian hinterland.
        </p>

        <p class="diff"><i>"2018"</i></p>
      </div>
      <div className="align">
        <img src={one} alt="One" />
        <img src={two} alt="Two" />
        <img src={three} alt="Three" />
        <img src={four} alt="Four" />
        <img src={five} alt="Five" />
        <img src={six} alt="Six" />
        <img src={seven} alt="Seven" />
        <img src={eight} alt="Eight" />
        <img src={nine} alt="Nine" />
        <img src={ten} alt="Ten" />
        <img src={eleven} alt="Eleven" />
        <img src={twelve} alt="Twelve" />
      </div>
    </div>
  );
}

export default OttoDaily;

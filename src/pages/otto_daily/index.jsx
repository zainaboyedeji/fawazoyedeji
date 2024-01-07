import one from "../../image/projects/04_otto daily/01.jpg";
import two from "../../image/projects/04_otto daily/02.jpg";
import three from "../../image/projects/04_otto daily/03.jpg";
import four from "../../image/projects/04_otto daily/04.jpg";
import five from "../../image/projects/04_otto daily/05.jpg";
import six from "../../image/projects/04_otto daily/06.jpg";
import seven from "../../image/projects/04_otto daily/07.jpg";
import eight from "../../image/projects/04_otto daily/08.jpg";
import nine from "../../image/projects/04_otto daily/09.jpg";
import ten from "../../image/projects/04_otto daily/10.jpg";
import eleven from "../../image/projects/04_otto daily/11.jpg";
import MobileHead from "../../components/mobile_head";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./otto_daily.scss";

function OttoDaily() {
  return (

      <div className="ottodaily">
        <MobileHead />
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

          <p className="diff"><i>"2018"</i></p>
        </div>
        <div className="allImg">
        <LazyLoadImage src={one} alt="One" />
        <LazyLoadImage src={two} alt="Two" />
        <LazyLoadImage src={three} alt="Three" />
        <LazyLoadImage src={four} alt="Four" />
        <LazyLoadImage src={five} alt="Five" />
        <LazyLoadImage src={six} alt="Six" />
        <LazyLoadImage src={seven} alt="Seven" />
        <LazyLoadImage src={eight} alt="Eight" />
        <LazyLoadImage src={nine} alt="Nine" />
        <LazyLoadImage src={ten} alt="Ten" />
        <LazyLoadImage src={eleven} alt="Eleven" />
        </div>
      </div>
     
  );
}

export default OttoDaily;

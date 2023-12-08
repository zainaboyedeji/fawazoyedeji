import one from "../../image/3_awakening/FO_001.jpg";
import two from "../../image/3_awakening/FO_002.jpg";
import three from "../../image/3_awakening/FO_003.jpg";
import five from "../../image/3_awakening/FO_005.jpg";
import four from "../../image/3_awakening/FO_006.jpg";
import six from "../../image/3_awakening/FO_004.jpg";
import MobileHead from "../../components/mobile_head";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./awakening.scss";

function Awakening() {
    return (
        <div className="awakening">
            <MobileHead/>
            <div className="first">
                <p>
                    After years of experiencing political corruption, human rights violation, and extortion within the SARS [Special Anti Robbery Squad] unit of the police force, young Nigerians are determined to reform the policing system
                    through a series of peaceful nationwide protests until their demands are met.
                </p>

                <p>
                    Despite a system that has been unresponsive to their need, the youth of Nigeria have spoken up. There is poetry to the fact that the protest erupted in October 2020; Oct. 1, 1960, marked the official date of Nigeria’s
                    independence from British rule. Sixty years later, young Nigerians are still demanding freedom from repression.
                </p>

                <p>
                    The pattern of assembling policing forces to protect government over the people, to prey on local communities, and suppress dissent continued well into the 20th century. The Aba Women’s War of 1929, the General Strike of
                    1945, and the Enugu Colliery Strike of 1949 were instances where anti-colonial resistance was met with a quasi-military policing force deployed to subjugate citizens.
                </p>

                <p>
                    The #EndSARS protest which started as a peaceful demonstration by thousands of youths quickly degenerated into chaos as security forces, mostly police began to use live ammunition and tear gas on protesters leading to an
                    estimated death of at least 100 individuals. 48 of whom were killed on October 20, 2020, alone.{" "}
                </p>

                <p>
                    Here, I visualize my experience at four demonstrations I partook in at Lagos, Nigeria. Everything is captured in the spontaneous as we citizens mobilize collectively across the city. Each figure’s physical struggle is
                    simultaneously expressive and reflective of the political situation.{" "}
                </p>

                <p className="diff"><i>"2020"</i></p>
            </div>

            <div className="allImg">
        <LazyLoadImage src={one} alt="One" />
        <LazyLoadImage src={two} alt="Two" />
        <LazyLoadImage src={three} alt="Three" />
        <LazyLoadImage src={four} alt="Four" />
        <LazyLoadImage src={five} alt="Five" />
        <LazyLoadImage src={six} alt="Six" />
     
            </div>
        </div>
      
    );
}

export default Awakening;

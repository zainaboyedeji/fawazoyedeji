import one from "../../../image/3awakening/FO_The-Awakening_001.jpg";
import two from "../../../image/3awakening/FO_The-Awakening_002.jpg";
import three from "../../../image/3awakening/FO_The-Awakening_003.jpg";
import four from "../../../image/3awakening/FO_The-Awakening_004.jpg";
import five from "../../../image/3awakening/FO_The-Awakening_005.jpg";
import six from "../../../image/3awakening/FO_The-Awakening_006.jpg";
import seven from "../../../image/3awakening/FO_The-Awakening_007.jpg";
import eight from "../../../image/3awakening/FO_The-Awakening_008.jpg";
import nine from "../../../image/3awakening/FO_The-Awakening_009.jpg";
import ten from "../../../image/3awakening/FO_The-Awakening_010.jpg";
import eleven from "../../../image/3awakening/FO_The-Awakening_011.jpg";
import twelve from "../../../image/3awakening/FO_The-Awakening_012.jpg";
import MobileHead from "../../../Components/MobileHead";
import "./awakening.scss";

function Awakening() {
    return (
        <div className="awakening">
            <MobileHead/>
            <div class="first">
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

                <p class="diff"><i>"2020"</i></p>
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

export default Awakening;

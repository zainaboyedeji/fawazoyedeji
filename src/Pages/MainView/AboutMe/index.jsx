import "./aboutme.scss";
import fawwaz from "../../../image/6about&contact/fawazoyedeji.png";
import MobileHead from "../../../Components/MobileHead";


function AboutMe() {
  return (
    <div className="aboutme">
      <MobileHead/>
      <div className="d-flex first">
        <div className="avatar">
          <img src={fawwaz} alt="fawwaz" />
        </div>
        <div className="next">
          <p>
          Fawaz Oyedeji is a documentary photographer & historian based in Lagos, Nigeria. He studied Mass Communication at the Yaba College of Technology [Nigeria] & he’s currently pursuing a B.A.E in History Education at the University Of Lagos [Nigeria].
          </p>

          <p>
          As a photojournalist, Fawaz is very motivated to keep records. He believes it’s extremely significant to record daily life and even now and then, the seemingly mundane, not just for a superior awareness and understanding of our times, but for individuals in the future to be able to reflect on who they are and how they got there.
          </p>

          <p>
          Fawaz has been commissioned by notable publications, and organizations like The Financial Times, Sahelein.com and the ICLEI – Local Governments for Sustainability. In the past, he has showcased his works in Lagos, New York, Kigali, and Germany and he is also a beneficiary of the Eugene Smith Memorial Fund Student Grant (2019), Bronx Documentary Center/DC Grant (2020) & Daniele Tamagni Grant (2021) for his work Yours In Arms.
          </p>
        </div>
      </div>
      <div className="grants">
        <h6>Grants:</h6>
        <span>
          2021,  
          <a href="https://www.danieletamagni.com/second-edition/">
            Daniele Tamagni Grant
          </a> 
          — Recipient
        </span>
        <br />
        <span>
          2021, 
          <a href="https://www.everydayprojects.org/grant">
            The Everyday Projects Grant
          </a> 
          — Finalist
        </span>
        <br />
        <span>
          2020, 
           <a href="https://newhouse.syr.edu/news/finalists-announced-in-the-2020-alexia-grant-competition/">
            Alexia Foundation Student Grant
          </a> 
          — Shortlist
        </span>
        <br />
        <span>2020, The Future Award Africa, Arts — Nominee</span>
        <br />
        <span>
          2020, 
          <a href="https://www.bronxdoc.org/news/meet-the-bdc-darryl-chappell-grant-recipients">
            BDC Darryl Chappell Grant
          </a> 
          — Recipient
        </span>
        <br />
        <span>
          2020, Prince Claus/Open Society Foundations Mobility Grant — Recipient
        </span>
        <br />
        <span>2019, Alexia Foundation Student Grant — Shortlist</span>
        <br />
        <span>
          2019,
          <a href="https://www.smithfund.org/recipients/2019-fawaz-oyedeji">
            W. Eugene Smith Memorial Fund Student Grant
          </a>
          — Recipient
        </span>
        <br />
        <span>2018, Fashola Photo Contest, Nigeria — Second Runner Up</span>
        <br />
      </div>

      <div className="next">
        <h6>Masterclasses/Internship:</h6>
        <span> 2021, 8th annual New York Portfolio Review</span><br />
        <span>
          2019,
          <a href="https://vii.academy/review-foundry-photojournalism-workshop/">
             VII Academy - Foundry Photo Workshop, Kigali
          </a>
        </span><br />
        <span>
          2018, Intern photographer at
          <a href="https://www.thetemplecompany.com/home/">
            The Temple Management Company
          </a>
        </span><br />
        <span>2018, Fashola Photo Foundation Workshop</span><br />
        <span>2018, Lagos Photo/Canon Storytelling Master Class</span><br />
      </div>

      <div className="next">
        <h6>Commissions/Publications:</h6>
        <span>
          2021,
          <a href="https://www.ft.com/content/a12bb6b1-798d-4863-8b49-104a56ccc716#comments-anchor">
            Gun for Hire: Nigeria security fears spark boom in private
            protection
          </a>
          - Financial Times
        </span><br />
        <span>
          2020,
          <a href="https://sahelien.com/en/endsars-is-a-rare-moment-of-class-solidarity-in-nigeria/">
            #EndSARS is a rare moment of class solidarity in Nigeria
          </a>
          - Sahelien
        </span><br />
        <span>2020, Photo Narration - ICLEI Africa’s RISE Africa.</span><br />
        <span>
          2020, Photo Reportage - Coffey International Development Ltd.
        </span><br />
        <span>2020, Yours In Arms - No Wahala Magazine.</span>
      </div>

      <div className="next">
        <h6>Group Exhibitions:</h6>
        <span>
          2021, World Press Photo/Everyday Projects Exhibition, Oldenburg,
          Germany
        </span><br />
        <span>
          2020, Hidden Flows Exhibition by ICLEI Africa, South Africa.
        </span><br />
        <span>
          2019, Kigali Centre For Photography/VII Academy Exhibition, Kigali,
          Rwanda.
        </span><br />
        <span>2018, Canon Alumni Exhibition, Lagos, Nigeria.</span>
      </div>

      <div className="next">
        <h6>Education:</h6>
        <span>
          2021, Bachelor of Arts & Education, Specialisation: History Education,
          University of Lagos, Nigeria
        </span><br />
        <span>
          2017, National Diploma, Specialisation: Mass Communication, Yaba
          College of Technology, Nigeria.
        </span><br />
      </div>
    </div>
  );
}

export default AboutMe;

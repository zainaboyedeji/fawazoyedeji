import one from "../../image/projects/01_yours_in_arms/Fawaz-Oyedeji-Yours-In-Arms-001.jpg";
import two from "../../image/projects/01_yours_in_arms/Fawaz-Oyedeji-Yours-In-Arms-002.jpg";
import three from "../../image/projects/01_yours_in_arms/Fawaz-Oyedeji-Yours-In-Arms-003.jpg";
import four from "../../image/projects/01_yours_in_arms/Fawaz-Oyedeji-Yours-In-Arms-004.jpg";
import five from "../../image/projects/01_yours_in_arms/Fawaz-Oyedeji-Yours-In-Arms-005.jpg";
import six from "../../image/projects/01_yours_in_arms/Fawaz-Oyedeji-Yours-In-Arms-006.jpg";
import seven from "../../image/projects/01_yours_in_arms/Fawaz-Oyedeji-Yours-In-Arms-007.jpg";
import eight from "../../image/projects/01_yours_in_arms/Fawaz-Oyedeji-Yours-In-Arms-008.jpg";
import nine from "../../image/projects/01_yours_in_arms/Fawaz-Oyedeji-Yours-In-Arms-009.jpg";
import ten from "../../image/projects/01_yours_in_arms/Fawaz-Oyedeji-Yours-In-Arms-010.jpg";
import eleven from "../../image/projects/01_yours_in_arms/Fawaz-Oyedeji-Yours-In-Arms-011.jpg";
import twelve from "../../image/projects/01_yours_in_arms/Fawaz-Oyedeji-Yours-In-Arms-012.jpg";
import thirteen from "../../image/projects/01_yours_in_arms/Fawaz-Oyedeji-Yours-In-Arms-013.jpg";
import fourteen from "../../image/projects/01_yours_in_arms/Fawaz-Oyedeji-Yours-In-Arms-014.jpg";
import fifteen from "../../image/projects/01_yours_in_arms/Fawaz-Oyedeji-Yours-In-Arms-015.jpg";
import sixteen from "../../image/projects/01_yours_in_arms/Fawaz-Oyedeji-Yours-In-Arms-016.jpg";
import MobileHead from "../../components/mobile_head";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./yours_in_arm.scss";

function Yoursinarm() {
  return (
      <div className="yoursinarm">
        <MobileHead />
        <div className="first">
          <p>
            'Yours In Arms' highlights how surrounding circumstances have shaped
            the day-to-day struggles and resilience of students preserving the
            history of a civilian-run infantry in Nigeria.
          </p>

          <p>
            The establishment of paramilitary in institutions dates back to the
            Nigerian Second Republic [1976] under a militia regime headed by
            General Olusegun Obasanjo as a prospect to coax more educated fellows
            into the armed forces, soldiers would regularly come to inculcate
            military training in drills and parades, self-defense, physical
            fitness, first aid, citizenship, and leadership. Culturally, since its
            establishment, the program has been responsible for breeding a
            relative number of civilian youths dispersed throughout the nation,
            attached to a grass-rooted political scheme like this.
          </p>

          <p>
            In modern times, the degree of pressure from being both CADET and
            STUDENT is considered an exhausting task. At Yaba College Of
            Technology alone, out of over 16,000 student enrolment, statistics
            show that approximately only 0.2% of this population usually makes the
            brave decision and chose to combine this extracurricular activity with
            school work and personal life.
          </p>

          <p>
            My project examines the diverse realities of life as a student cadet
            through a proper account of their in-group activities and the
            socio-political roles these youths play within the Nigerian context. I
            was inspired to start this story because I was once a member of this
            organization. After finishing my service, It became clear how much
            I’ve been disconnected from their conventions over the years, rather
            than embrace them. Mostly because I found it extremely hard to bear
            this militia journey while managing other drastic social changes in my
            personal life. By reconnecting with these cadets and photographing
            their realities both vigorous and vulnerable phases, I am exploring
            the truth and fiction of military personnel all over the world.
          </p>

          <p className="diff"><i>"2018-Ongoing"</i></p>
        </div>


        <div className='allImg'>
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
        <LazyLoadImage src={twelve} alt="Twelve" />
        <LazyLoadImage src={thirteen} alt="Thirteen" />
        <LazyLoadImage src={fourteen} alt="Fourteen" />

        <LazyLoadImage src={fifteen} alt="Fifteen" />
        <LazyLoadImage src={sixteen} alt="Sixteen" />
       
     
        </div>
       
      </div>
 
  );
}

export default Yoursinarm;

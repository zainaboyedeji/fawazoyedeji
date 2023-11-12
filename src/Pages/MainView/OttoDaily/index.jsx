import { useState } from 'react';
import one from "../../../image/4ottodaily/01.JPG";
import two from "../../../image/4ottodaily/02.JPG";
import three from "../../../image/4ottodaily/03.JPG";
import four from "../../../image/4ottodaily/04.JPG";
import five from "../../../image/4ottodaily/05.JPG";
import six from "../../../image/4ottodaily/06.JPG";
import seven from "../../../image/4ottodaily/07.JPG";
import eight from "../../../image/4ottodaily/08.JPG";
import nine from "../../../image/4ottodaily/09.JPG";
import ten from "../../../image/4ottodaily/10.JPG";
import eleven from "../../../image/4ottodaily/11.JPG";
import twelve from "../../../image/4ottodaily/12.JPG";
import MobileHead from "../../../Components/MobileHead";
import AppModal from '../../../Components/AppModal/index';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./ottodaily.scss";

function OttoDaily() {
  const [show, setShow] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const OttoImages = [
    {
      id: "1",
      src: one,
      title: "one",
    },
    {
      id: "2",
      src: two,
      title: "two",
    },
    {
      id: "3",
      src: three,
      title: "three",
    },
    {
      id: "4",
      src: four,
      title: "four",
    },
    {
      id: "5",
      src: five,
      title: "five",
    },
    {
      id: "6",
      src: six,
      title: "six",
    },
    {
      id: "7",
      src: seven,
      title: "seven",
    },
    {
      id: "8",
      src: eight,
      title: "eight",
    },
    {
      id: "9",
      src: nine,
      title: "nine",
    },
    {
      id: "10",
      src: ten,
      title: "ten",
    },
    {
      id: "11",
      src: eleven,
      title: "eleven",
    },
    {
      id: "12",
      src: twelve,
      title: "twelve",
    },
  ]

  const showModal = (index) => {
    setShow(true);
    setSelectedIndex(index)
  };

  const currentImage = () => {
    const find = OttoImages.find((obj, index) => {
      return index === selectedIndex
    });
    return find.src
  }

  const hideModal = () => {
    setShow(false);
  }
  const nextImage = () => {
    if (selectedIndex >= 11) {
      return
    }
    setSelectedIndex(selectedIndex + 1)

  }
  const previousImage = () => {
    if (selectedIndex <= 0) {
      return
    }
    setSelectedIndex(selectedIndex - 1)
  }
  return (
    <>
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
        <div className="align">
          {
            OttoImages.map((image, index) =>
              <img src={image.src} alt={image.title} onClick={() => showModal(index)} />
            )
          }
        </div>
      </div>
      <AppModal show={show}>
        <div className='newModalImage d-flex'>
          <IoIosArrowBack onClick={previousImage} />
          <div className='imgMain mt-5' onClick={hideModal}><img src={currentImage()} alt="newimage" /></div>
          <IoIosArrowForward onClick={nextImage} />
        </div>
      </AppModal>
    </>
  );
}

export default OttoDaily;

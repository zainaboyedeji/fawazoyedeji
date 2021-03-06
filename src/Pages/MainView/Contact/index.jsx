import "./contact.scss";
import MobileHead from "../../../Components/MobileHead";

function Contact() {
  return (
    <div className="contact">
      <MobileHead/>
      <div className="line"></div>
      <div className="arr">
        <p>
          For inquiries regarding availability for commissions, image licensing,
          and print purchase, please contact.
        </p>
      </div>

      <div className="arr">
        <h1>FAWAZ OYEDEJI.</h1>
      </div>
      <div className="arr">
        <p>email: <a href="mailto:fawazoyedeji01@gmail.com">fawazoyedeji01@gmail.com</a></p>

        <p>tel: +234-90-93173219</p>
      </div>
    </div>
  );
}

export default Contact;

import "./contact.scss";
import MobileHead from "../../components/mobile_head";
import Footer from "../../components/footer";

function Contact() {
  return (
    <>
      <div className="contact">
        <MobileHead />
        <div className="line"></div>
        <div className="arr">
          <p>
            For inquiries regarding availability for commissions, image
            licensing, and print purchase, please contact.
          </p>
        </div>

        <div className="arr">
          <h1>FAWAZ OYEDEJI.</h1>
        </div>
        <div className="arr">
          <p>
            email:
            <a href="mailto:contactfawazoyedeji@gmail.com">
              contactfawazoyedeji@gmail.com
            </a>
          </p>

          <p>whatsapp: +234-90-93173219</p>
        </div>
      </div>
      <div className="contactFooter">
        <Footer />
      </div>
    </>
  );
}

export default Contact;

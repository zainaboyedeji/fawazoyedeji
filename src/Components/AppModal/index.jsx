import './appmodal.scss';
import { MdOutlineCancel } from "react-icons/md";

const AppModal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <div class="modalIcon">
      <MdOutlineCancel  onClick={handleClose}/>
        </div>
      <section className="modal-main">
        {children}
      </section>
    </div>
  );
};

export default AppModal;
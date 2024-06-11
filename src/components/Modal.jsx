// export default Modal;
import { AnimatePresence, motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom"; // Assuming use of react-router-dom

const backdrop = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
const modal = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "200px",
    opacity: 1,
    transition: { delay: 0.5, duration: 0.5 }, // Adjust delay and duration as needed
  },
};

const Modal = ({ showModal, setShowModal }) => {
  const navigate = useNavigate();
  const button = () => {
    setShowModal(false);
    setTimeout(() => {
      navigate("/");
    }, 100);
  };
  return (
    <AnimatePresence mode="wait">
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdrop}
          initial="hidden"
          exit="hidden"
          animate="visible"
        >
          <motion.div className="modal" variants={modal}>
            <p>Want to make another pizza?</p>

            <button onClick={button}>Start Again</button>

            {/* <button onClick={() => setShowModal(false)}>Start Again</button> */}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;

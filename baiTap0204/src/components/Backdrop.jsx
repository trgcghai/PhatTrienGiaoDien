import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

const Backdrop = () => {
  const { toggleModal } = useContext(ModalContext);
  return (
    <div
      onClick={toggleModal}
      className="fixed top-0 right-0 left-0 bottom-0 z-20 bg-gray-800/50"
    ></div>
  );
};
export default Backdrop;

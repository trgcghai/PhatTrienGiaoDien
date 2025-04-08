import { createContext, useState } from "react";

export const ModalContext = createContext({
  isOpen: false,
  type: "",
  data: {},
  toggleModal: () => {},
  onSuccess: null,
  setOnSuccess: () => {},
});

const ModalContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({});
  const [onSuccess, setOnSuccess] = useState(null);
  const [modalType, setModalType] = useState("");

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleSetData = (newData) => {
    setData(newData);
  };

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        toggleModal,
        data,
        handleSetData,
        onSuccess,
        setOnSuccess,
        modalType,
        setModalType,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
export default ModalContextProvider;

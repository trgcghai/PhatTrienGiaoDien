import { createContext, useState } from "react";

export const ModalContext = createContext({
  isOpen: false,
  data: {},
  toggleModal: () => {},
});

const ModalContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({});

  const toggleModal = () => {
    console.log("toggleModal called");
    console.log("isOpen before toggle:", isOpen);
    setIsOpen(!isOpen);
  };

  const handleSetData = (newData) => {
    setData(newData);
  };

  return (
    <ModalContext.Provider value={{ isOpen, toggleModal, data, handleSetData }}>
      {children}
    </ModalContext.Provider>
  );
};
export default ModalContextProvider;

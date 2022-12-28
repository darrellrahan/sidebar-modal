import React, { useContext, useState } from "react";

const GlobalContext = React.createContext();

export function useGlobalContext() {
  return useContext(GlobalContext);
}

export function AppProvider(prop) {
  const { children } = prop;

  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowSidebar, setIsShowSidebar] = useState(false);

  const openModal = () => setIsShowModal(true);
  const closeModal = () => setIsShowModal(false);
  const openSidebar = () => setIsShowSidebar(true);
  const closeSidebar = () => setIsShowSidebar(false);

  return (
    <GlobalContext.Provider
      value={{
        isShowModal,
        openModal,
        closeModal,
        isShowSidebar,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

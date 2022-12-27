import React, { useContext, useState } from "react";

const ModalContext = React.createContext();

export function useModalContext() {
  return useContext(ModalContext);
}

export function ModalProvider(prop) {
  const { children } = prop;

  const [isShow, setIsShow] = useState(false);

  const open = () => setIsShow(true);
  const close = () => setIsShow(false);

  return (
    <ModalContext.Provider value={{ isShow, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

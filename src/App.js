import React from "react";
import Home from "./components/Home";
import Modal from "./components/Modal";
import { ModalProvider } from "./context";

function App() {
  return (
    <ModalProvider>
      <Home />
      <Modal />
    </ModalProvider>
  );
}

export default App;

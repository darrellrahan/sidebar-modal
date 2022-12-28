import React from "react";
import Home from "./components/Home";
import Modal from "./components/Modal";
import Sidebar from "./components/Sidebar";
import { AppProvider } from "./context";

function App() {
  return (
    <AppProvider>
      <Home />
      <Modal />
      <Sidebar />
    </AppProvider>
  );
}

export default App;

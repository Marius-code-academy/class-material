import { useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Modal from "./components/Modal/Modal";
import StackingContextExample from "./components/StackingContextExample/StackingContextExample";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>Open modal</button>
      <Modal title={"My modal"} footerText={"Footer text"} open={isModalOpen} setOpen={setIsModalOpen}>
        <h4>Ar jus sutinkate daryti kazka?</h4>
        <button onClick={handleModalClose}>Yes</button>
        <button onClick={handleModalClose}>No</button>
      </Modal>
      <Card footer={"footer 1"} title="kortele 1">
        <p>laksdjhflaksdjfh</p>
        <p>kljahdlfkajshd 2</p>
      </Card>
      <Card title="kortele 2" footer="footer 2">
        <h3>kazkoks skirtingas card body</h3>
      </Card>
      <StackingContextExample />
    </>
  );
}

export default App;

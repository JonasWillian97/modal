import { useState } from "react";
import Modal from "react-modal";
import "./App.css";

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function abrirModal() {
    setIsOpen(true);
  }

  function fecharModal() {
    setIsOpen(false);
  }

  return (
    <div className="Container">
      <button className="btn btn-primary" onClick={abrirModal}>Abrir Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={fecharModal}
        contentLabel="Example Modal"
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <h2>Olá - Eu sou o modal!</h2>
        <hr />
        <p>
        Mantemos que a acessibilidade é um componente chave de qualquer web moderna
          inscrição. Como tal, criamos este modal de tal forma que ele
          atende aos requisitos de acessibilidade da web moderna. Nós procuramos
          manter o foco na acessibilidade ao mesmo tempo em que fornece um ambiente funcional, capaz
          componente modal para uso geral.
        </p>
        <button className="btn btn-danger" onClick={fecharModal}>Fechar</button>
      </Modal>
    </div>
  );
}

export default App;
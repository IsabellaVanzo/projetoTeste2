import React, { useEffect } from 'react';
import RegistroVendasForm from "../Components/RegistroVendasForm.jsx";
import TabelaRegistroVendas from "../Components/TabelaRegistroVendas.jsx";
import '../css/modal.css';
import { FaCirclePlus } from "react-icons/fa6";

function ModalRegistroVendas() {

  const loadModalScript = async () => {
    try {
      const module = await import('../data/jsModal.js');
      module.default();
    } catch (error) {
      console.error("Failed to load modal script:", error);
    }
  };

  useEffect(() => {
    loadModalScript();
  }, []);

  return (
    <div className="modal-container">
      <button id="myBtn"><FaCirclePlus /></button>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close">&times;</span>
          <RegistroVendasForm />
        </div>
      </div>
      <TabelaRegistroVendas />
    </div>
  );
}

export default ModalRegistroVendas;

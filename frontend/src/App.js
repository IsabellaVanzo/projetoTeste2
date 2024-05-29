import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Rotas from "./Routes";
import Navegacao from "./Components/Navegacao";

const App = () => {
  return (
    <>
      <Router>
        <Navegacao />
        <Rotas />
      </Router>
    </>
  );
};

export default App;

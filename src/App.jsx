import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";

import Calculos from "./pages/Calculos";
import SegundoGrau from "./pages/Calculadoras/SegundoGrau";
import Pitagoras from "./pages/Calculadoras/Pitagoras";

import Artigos from "./pages/Artigos";
import ArtigoSegundoGrau from "./pages/Artigos/ArtigoSegundoGrau";
import TeoremaDePitagoras from "./pages/Artigos/TeoremaDePitagoras";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/sobre" component={Sobre} />

      <Route path="/artigos" exact component={Artigos} />
      <Route path="/artigos/SegundoGrau" component={ArtigoSegundoGrau} />
      <Route
        path="/artigos/TeoremaDePitagoras"
        component={TeoremaDePitagoras}
      />

      <Route path="/calculos" exact component={Calculos} />
      <Route path="/calculos/SegundoGrau" component={SegundoGrau} />
      <Route path="/calculos/Pitagoras" component={Pitagoras} />
    </BrowserRouter>
  );
}

export default App;

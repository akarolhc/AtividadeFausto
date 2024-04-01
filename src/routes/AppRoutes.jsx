import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicial from "../pages/Inicial";
import Sobre from "../pages/Sobre";
import Contato from "../pages/Contato";
import Body from "../layout/Body";
import McIG from "../pages/McIG";
import McKevin from "../pages/McKevin";
import IcaroEGilmar from "../pages/IcaroEGilmar";
import MariliaMendonca from '../pages/MariliaMendonca'
import EduardoELeonardo from '../pages/EduardoELeonardo'

export default function AppRoutes() {
  return (
    <BrowserRouter> {/* responsável por englobar o app em navegação */}
      <Routes> {/* responsável pelas rotas */}
        <Route path="/" element={<Body />}>
          <Route path="/" element={<Inicial />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/mcIG" element={<McIG />} />
          <Route path="/mcKevin" element={<McKevin />} />
          <Route path="/IcaroEGilmar" element={<IcaroEGilmar />} />
          <Route path="/MaríliaMendonça" element={<MariliaMendonca />} />
          <Route path="/EduardoELeonardo" element={<EduardoELeonardo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

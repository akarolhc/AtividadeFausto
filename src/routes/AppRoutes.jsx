import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicial from "../pages/Inicial";
import Sobre from "../pages/Sobre";
import Contato from "../pages/Contato";
import Body from "../layout/Body";
import McIG from "../pages/McIG";
import Djonga from '../pages/Djonga'
import Luan from '../pages/Luan'
import Matue from "../pages/Matue";
import JorgeEMateus from "../pages/JEM";

export default function AppRoutes() {
  return (
    <BrowserRouter> {/* responsável por englobar o app em navegação */}
      <Routes> {/* responsável pelas rotas */}
        <Route path="/" element={<Body />}>
          <Route path="/" element={<Inicial />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/mcIG" element={<McIG />} />
          <Route path="/Matue" element={<Matue />} />
          <Route path="/Luan" element={<Luan />} />
          <Route path="/JorgeEMateus" element={<JorgeEMateus />} />
          <Route path="/Djonga" element={<Djonga />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

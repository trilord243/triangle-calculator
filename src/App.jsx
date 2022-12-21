import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Porcentajes from "./components/Porcentajes";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/porcentajes" element={<Porcentajes />} />
          <Route path="*" element={<p>Pagina no encontrada</p>} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;

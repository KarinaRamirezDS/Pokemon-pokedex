
import './App.css';

import { HashRouter, Route, Routes } from "react-router-dom";
import NameForm from './components/NameForm';
import Characters from './components/Characters';
import ProtectedRoutes from "./components/ProtectedRoutes";
import CharacterDetail from "./components/CharacterDetail";



function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<NameForm />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/pokedex" element={<Characters />} />
            <Route path="/pokedex/:id" element={<CharacterDetail />} />
          </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;

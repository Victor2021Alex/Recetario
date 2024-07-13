import './App.css';
import MyComponent from "./components/headerComponent";
import FooterC from "./components/footerComponent";
import Component from './components/component';
import Contenido from './components/contenido';
import ComidaRapida from './components/comidaRapida';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (  
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <header>
          <MyComponent />
        </header>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Contenido />} />
            <Route path="/component" element={<Component />} />
            <Route path="/contenido" element={<Contenido />} />
            <Route path="/comidaRapida" element={<ComidaRapida />} />
            {/* Agrega más rutas según sea necesario */}
          </Routes>
        </main>
        <footer>
          <FooterC />
        </footer>
      </div>
    </Router>
  );
}

export default App;
 

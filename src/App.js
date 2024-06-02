import './App.css';
import MyComponent from "./components/headerComponent";
import FooterC from "./components/footerComponent";
import Home from "./components/home";
import Component from './components/component';
import Contenido from './components/contenido';
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
            <Route path="/" element={<Home />} />
            <Route path="/component" element={<Component />} />
            <Route path="/contenido" element={<Contenido />} />
            {/* Agrega más rutas según sea necesario */}
          </Routes>
      </main>
      <FooterC />
    </div> 
    </Router>
  );
}

export default App;
 

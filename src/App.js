import './App.css';
import MyComponent from "./components/headerComponent";
import FooterC from "./components/footerComponent"
import Home from "./components/home"

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header>
        <MyComponent />
      </header>
      <main className="flex-grow">
        <Home/>
      </main>
      <FooterC />
    </div>
    
  );
}

export default App;

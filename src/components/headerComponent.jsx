import { Link } from 'react-router-dom';
import React from 'react';

export default function MyComponent() {
  return (
    <div className="flex flex-col">
      <header className="bg-[#F5F5F5] px-4 lg:px-6 py-4 flex items-center justify-between">
        <Link to="#" className="flex items-center gap-2 text-[#333] font-bold text-lg" prefetch={false}>
          <UtensilsIcon className="h-6 w-6 text-[#E67E22]" />
          <span>Recetario</span>
        </Link>
        <nav className="hidden md:flex gap-6 text-[#666] font-medium">
          <Link to="/component" className="hover:text-[#E67E22] transition-colors" prefetch={false}>
            Inicio
          </Link>
          <Link to="/contenido" className="hover:text-[#E67E22] transition-colors" prefetch={false}>
            Comida casera
          </Link>
          <Link to="/component" className="hover:text-[#E67E22] transition-colors" prefetch={false}>
            Postres
          </Link>
          <Link to="/contenido" className="hover:text-[#E67E22] transition-colors" prefetch={false}>
            Comida rapida
          </Link>
        </nav>
        <div className="flex gap-4">
          <a href="#" className="py-2 px-4 border border-gray-300 rounded-lg text-[#E67E22] hover:bg-[#E67E22] hover:text-white transition-colors">
            Login
          </a>
          <a href="#" className="py-2 px-4 bg-[#E67E22] text-white rounded-lg hover:bg-[#D35400] transition-colors">
            Register
          </a>
        </div>
      </header>
    </div>
  );
}

function UtensilsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
      <path d="M7 2v20" />
      <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
    </svg>
  );
}


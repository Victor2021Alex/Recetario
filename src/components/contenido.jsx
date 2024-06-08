import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import torta from '../assets/imagenes/torta.jpg';
import tarta from '../assets/imagenes/tarta-de-queso.jpg';
import cafe from '../assets/imagenes/Cafe.jpg';
import crema from '../assets/imagenes/CremaDeChocolate.jpg';
import pastel from '../assets/imagenes/Pastel de fresas.jpg';
import pastelMousse from '../assets/imagenes/PastelMousse.jpg';
import MyBook from './ui/MyBook'; // Importa el componente MyBook

export default function Component() {
  const products = [
    { id: 1, name: "Torta", description: "Elegant and comfortable", image: torta },
    { id: 2, name: "Tarta de queso", description: "Tarta de queso", image: tarta },
    { id: 3, name: "Cafe", description: "Cafe", image: cafe },
    { id: 4, name: "Crema de chocolate", description: "Crema de chocolate", image: crema },
    { id: 5, name: "Pastel de fresas", description: "Pastel de fresas", image: pastel },
    { id: 6, name: "Pastel de Mousse", description: "Pastel de Mousse", image: pastelMousse },
  ];

  return (
    <div>
      <main>
        {/* Estilo de libro */}
        <MyBook pages={products.map(product => ({ image: product.image }))} />
      </main>
      {/* Renderizado de los productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto p-4 md:p-6">
        {products.map(product => (
          <div key={product.id} className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <Link to="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View</span>
            </Link>
            <a className="absolute top-3 left-3 z-20 bg-white/50 hover:bg-white/80 dark:bg-gray-950/50 dark:hover:bg-gray-950/80 rounded-full transition-colors p-2">
              <HeartIcon />
            </a>
            <img src={product.image} alt={product.name} width={500} height={400} className="object-cover w-full h-64" />
            <div className="bg-white p-4 dark:bg-gray-950">
              <h3 className="font-bold text-xl">{product.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{product.description}</p>
              <div className="flex justify-center mt-4">
                <a href="#" className="py-2 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
                  Ver
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HeartIcon() {
  const [liked, setLiked] = useState(false); // Estado inicial del botón "me gusta"

  // Función para cambiar el estado de "liked" cuando se hace clic en el corazón
  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      onClick={toggleLike} // Agregar evento de clic para cambiar el estado de "liked"
      className={`w-6 h-6 ${liked ? 'text-red-500 fill-current' : 'stroke-current'}`} // Clase para cambiar el color del corazón en caso de ser "liked"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

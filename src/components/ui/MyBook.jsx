import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import Rating from '../../components/ui/Rating';
import "../../App.css";

const MyBook = ({ pages }) => {
    return (
        <div className="book-container">
            <HTMLFlipBook width={350} height={600} className="flip-book">
                {pages.map((page, index) => (
                    <div key={index} className="page hard">
                        <Rating rating={5} />  {/* Muestra la calificación de estrellas aquí */}
                        <img src={page.image} alt={`Page ${index + 1}`} />
                        <div>
                            <button
                                onClick={() => alert(`Botón en la página ${index + 1} clicado!`)}
                                className="btn btn-primary"
                            >
                                Ver receta
                            </button>
                        </div>
                    </div>
                ))}
            </HTMLFlipBook>
        </div>
    );
};

export default MyBook;

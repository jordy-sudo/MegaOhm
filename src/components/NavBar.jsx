import React from "react";

export const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <a href="/" className="text-white font-bold text-xl">
            Mi Aplicación
          </a>
          <div className="flex space-x-4">
            <a href="/" className="text-white hover:text-gray-400">
              Inicio
            </a>
            <a href="/about" className="text-white hover:text-gray-400">
              Acerca de
            </a>
            <a href="/contact" className="text-white hover:text-gray-400">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

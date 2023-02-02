import React from "react";
import { Footer } from "../Footer";
import { NavBar } from "../NavBar";

export const ContactPage = () => {
  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-5xl font-bold text-indigo-600">Contactanos</h1>
        <div className="w-full max-w-sm mt-16 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Nombre</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="nombre"
              type="text"
              placeholder="Ingrese su nombre"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Ingrese su email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Mensaje
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="mensaje"
              rows="6"
              placeholder="Ingrese su mensaje"
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

import React from "react";
import { Footer } from "../Footer";
import { NavBar } from "../NavBar";

export const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className=" mx-auto py-1">
        <section
          className="bg-cover bg-center h-96 "
          style={{
            backgroundImage: "url(https://fondosmil.com/fondo/59003.jpg)",
          }}
        >
          <div className="container mx-auto py-28 px-4">
            <div className="text-white text-left animate-bounce">
              <h1 className="text-5xl font-bold">Bienvenidos</h1>
              <p className="text-xl">
                Texto que refleja el proposito de la pagina web
              </p>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 py-16">
          <div className="flex">
            <div className="w-1/2">
              <img
                src="https://www.se.com/es/es/assets/v2/475/media/314325/585285403-1920x1080.jpg"
                alt="Imagen de ejemplo"
              />
            </div>
            <div className="w-1/2 pl-10 py-20">
              <h2 className="text-2xl font-bold mb-4">
                Servicios o experiencias
              </h2>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                aliquet metus a nulla malesuada, ac congue risus tristique.
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Acción
              </button>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 py-8">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white rounded-lg shadow-lg">
                <img
                  className="h-64 w-full object-cover object-center"
                  src="https://via.placeholder.com/300x200"
                  alt="Image 1"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold">Título de la tarjeta 1</h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla condimentum, mi a bibendum fringilla, justo libero
                    rutrum diam, a rutrum sapien risus at neque.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white rounded-lg shadow-lg">
                <img
                  className="h-64 w-full object-cover object-center"
                  src="https://via.placeholder.com/300x200"
                  alt="Image 2"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold">Título de la tarjeta 2</h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla condimentum, mi a bibendum fringilla, justo libero
                    rutrum diam, a rutrum sapien risus at neque.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white rounded-lg shadow-lg">
                <img
                  className="h-64 w-full object-cover object-center"
                  src="https://via.placeholder.com/300x200"
                  alt="Image 3"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold">Título de la tarjeta 3</h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla condimentum, mi a bibendum fringilla, justo libero
                    rutrum diam, a rutrum sapien risus at neque.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 p-10">
          <div className="container mx-auto">
            <div className="flex flex-wrap">
              <div className="w-1/2 p-4">
                <h2 className="text-xl font-bold mb-2">
                  Título de la columna 1
                </h2>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  viverra euismod odio, gravida pellentesque urna varius vitae.
                  Sed dui lorem, adipiscing in adipiscing et, interdum nec
                  metus. Mauris ultricies, justo eu convallis placerat, felis
                  enim ornare nisi, vitae mattis nulla ante id dui.
                </p>
              </div>
              <div className="w-1/2 p-4">
                <h2 className="text-xl font-bold mb-2">
                  Título de la columna 2
                </h2>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  viverra euismod odio, gravida pellentesque urna varius vitae.
                  Sed dui lorem, adipiscing in adipiscing et, interdum nec
                  metus. Mauris ultricies, justo eu convallis placerat, felis
                  enim ornare nisi, vitae mattis nulla ante id dui.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

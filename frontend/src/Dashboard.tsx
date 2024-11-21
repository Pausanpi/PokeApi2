/* import React from "react";

const Dashboard: React.FC = () => {
  const token = localStorage.getItem("githubToken");

  if (!token) {
    return <p>No has iniciado sesión.</p>;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Bienvenido a tu Dashboard</h1>
      <p>Token de acceso: {token}</p>
    </div>
  );
};

export default Dashboard;
 */

import React, { useState } from "react";
import { usePollinationsImage } from "@pollinations/react";

const Dashboard: React.FC = () => {
  const token = localStorage.getItem("githubToken");

  // Estados para la generación de imágenes
  const [type, setType] = useState<string>("agua");
  const [color, setColor] = useState<string>("amarillo");
  const [generate, setGenerate] = useState<boolean>(false);

  // Generar descripción a partir de los inputs
  const description = `A Pokémon of type ${type} with a ${color} theme, illustrated in a detailed and vibrant art style.`;

  // Hook de Pollinations
  const imageUrl = usePollinationsImage(description, {
    width: 512,
    height: 512,
    seed: Math.floor(Math.random() * 100000), // Generar un valor aleatorio
    model: "flux",
  });

  // Manejar la generación de la imagen
  const handleGenerateImage = () => {
    setGenerate(true);
  };

  if (!token) {
    return <p>No has iniciado sesión.</p>;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Bienvenido a Poke Api 2.0</h1>

      <div style={{ marginTop: "20px" }}>
        <h1 className="text-2xl text-red-400">Poke API</h1>

        {/* Selección del tipo */}
        <div className="mb-4">
          <label htmlFor="type-select" className="block text-sm font-medium text-gray-700">
            Selecciona un Tipo
          </label>
          <select
            id="type-select"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="water">Agua</option>
            <option value="fire">Fuego</option>
            <option value="grass">Planta</option>
            <option value="electric">Eléctrico</option>
          </select>
        </div>

        {/* Selección del color */}
        <div className="mb-4">
          <label htmlFor="color-select" className="block text-sm font-medium text-gray-700">
            Selecciona un Color
          </label>
          <select
            id="color-select"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          >
            <option value="yellow">Amarillo</option>
            <option value="red">Rojo</option>
            <option value="green">Verde</option>
            <option value="blue">Azul</option>
            <option value="pink">Rosa</option>
          </select>
        </div>

        {/* Botón para generar la imagen */}
        <button
          onClick={handleGenerateImage}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Generar Imagen
        </button>

        {/* Mostrar la imagen generada */}
        {generate ? (
          imageUrl ? (
            <div className="mt-4">
              <h2 className="text-lg font-medium">Imagen Generada:</h2>
              <img
                src={imageUrl}
                alt="Generated Pokémon"
                className="mt-4 border border-gray-300 rounded-md"
              />
            </div>
          ) : (
            <p>Generando imagen...</p>
          )
        ) : null}
      </div>
    </div>
  );
};

export default Dashboard;
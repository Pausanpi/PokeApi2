import React, { useState } from "react";
import { usePollinationsImage } from "@pollinations/react";

function App() {
  const [type, setType] = useState<string>("agua");
  const [color, setColor] = useState<string>("amarillo");
  const [generate, setGenerate] = useState<boolean>(false); // Control para iniciar la generación

  // Generar descripción a partir de los inputs
  const description = `A Pokémon of type ${type} with a ${color} theme, illustrated in a detailed and vibrant art style.`;

  // Hook de Pollinations: siempre lo llamamos, pero la descripción y parámetros se actualizan dinámicamente
  const imageUrl = usePollinationsImage(description, {
    width: 512,
    height: 512,
    seed: Math.floor(Math.random() * 100000), // Generar un valor aleatorio
    model: "flux",
  });

  const handleGenerateImage = () => {
    setGenerate(true); // Cambiar el estado para iniciar el proceso
  };

  return (
    <>
      <h1 className="text-2xl text-red-400">Poke Api</h1>

      <div>
        {/* Input para seleccionar tipo */}
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
            <option value="agua">Agua</option>
            <option value="fuego">Fuego</option>
            <option value="planta">Planta</option>
            <option value="electrico">Eléctrico</option>
          </select>
        </div>

        {/* Input para seleccionar color */}
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
            <option value="amarillo">Amarillo</option>
            <option value="rojo">Rojo</option>
            <option value="verde">Verde</option>
            <option value="azul">Azul</option>
            <option value="rosa">Rosa</option>
          </select>
        </div>

        {/* Botón para generar imagen */}
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
    </>
  );
}

export default App;

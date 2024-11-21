import React, { useState } from "react";
import { usePollinationsImage } from "@pollinations/react";

const Dashboard: React.FC = () => {
  const token = localStorage.getItem("githubToken");
  const [type, setType] = useState<string>("agua");
  const [color, setColor] = useState<string>("amarillo");
  const [accesory, setAccessory] = useState<string>("none");
  const [generate, setGenerate] = useState<boolean>(false);

  const description = `A Pokémon of type ${type} with a ${color} theme, wearing ${accesory} illustrated in a detailed and vibrant art style.`;

  const imageUrl = usePollinationsImage(description, {
    width: 512,
    height: 512,
    seed: Math.floor(Math.random() * 100000),
    model: "flux",
    nologo: false
  });

  const handleGenerateImage = () => {
    setGenerate(true);
  };

  if (!token) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-red-50 to-white">
        <div className="rounded-xl bg-white p-8 shadow-lg">
          <p className="text-lg font-medium text-gray-600">Please log in to continue</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-yellow-50 to-blue-50 px-4 py-12">
      <div className="mx-auto max-w-4xl">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="mb-3 text-5xl font-bold text-gray-800">
            Poke Api
          </h1>
          <p className="text-lg text-gray-600">
            Create your unique Pokémon using artificial intelligence
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Form Section */}
          <div className="rounded-2xl bg-white p-6 shadow-xl backdrop-blur-sm">
            <div className="space-y-6">
              {/* Type Selection */}
              <div className="group">
                <label htmlFor="type-select" className="block text-sm font-medium text-gray-700">
                  Choose Type
                </label>
                <select
                  id="type-select"
                  className="mt-2 block w-full rounded-lg border-2 border-gray-200 bg-white px-4 py-3 text-gray-700 transition-colors focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="water">Water</option>
                  <option value="fire">Fire</option>
                  <option value="grass">Grass</option>
                  <option value="electric">Electric</option>
                </select>
              </div>

              {/* Color Selection */}
              <div className="group">
                <label htmlFor="color-select" className="block text-sm font-medium text-gray-700">
                  Select Color
                </label>
                <select
                  id="color-select"
                  className="mt-2 block w-full rounded-lg border-2 border-gray-200 bg-white px-4 py-3 text-gray-700 transition-colors focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                >
                  <option value="yellow">Yellow</option>
                  <option value="red">Red</option>
                  <option value="green">Green</option>
                  <option value="blue">Blue</option>
                  <option value="pink">Pink</option>
                </select>
              </div>

              {/* Accessory Selection */}
              <div className="group">
                <label htmlFor="accessory-select" className="block text-sm font-medium text-gray-700">
                  Choose Accessory
                </label>
                <select
                  id="accessory-select"
                  className="mt-2 block w-full rounded-lg border-2 border-gray-200 bg-white px-4 py-3 text-gray-700 transition-colors focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200"
                  value={accesory}
                  onChange={(e) => setAccessory(e.target.value)}
                >
                  <option value="none">None</option>
                  <option value="hat">Hat</option>
                  <option value="scarf">Scarf</option>
                  <option value="glasses">Glasses</option>
                  <option value="crown">Crown</option>
                </select>
              </div>

              {/* Generate Button */}
              <button
                onClick={handleGenerateImage}
                className="group relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-4 text-white shadow-lg transition-all hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <span className="relative z-10 flex items-center justify-center text-lg font-medium">
                  Generate Pokemon
                  <svg
                    className="ml-2 h-5 w-5 transition-transform group-hover:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Preview Section */}
          <div className="rounded-2xl bg-white p-6 shadow-xl backdrop-blur-sm">
            <h2 className="mb-6 text-xl font-semibold text-gray-800">Preview</h2>
            {generate ? (
              imageUrl ? (
                <div className="overflow-hidden rounded-xl bg-gray-50 p-2">
                  <img
                    src={imageUrl}
                    alt="Generated Pokémon"
                    className="h-full w-full rounded-lg object-cover shadow-md transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ) : (
                <div className="flex h-64 items-center justify-center rounded-xl bg-gray-50">
                  <div className="text-center">
                    <div className="mb-4 inline-block h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
                    <p className="text-gray-600">Generating your Pokemon...</p>
                  </div>
                </div>
              )
            ) : (
              <div className="flex h-64 items-center justify-center rounded-xl bg-gray-50">
                <p className="text-gray-400">Your Pokemon will appear here</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
import React, { useState } from "react";
import { usePollinationsImage } from "@pollinations/react";
import { Wand2, Loader2 } from "lucide-react";

const Dashboard: React.FC = () => {
    const token = localStorage.getItem("githubToken");

    const [type, setType] = useState<string>("water");
    const [color, setColor] = useState<string>("yellow");
    const [accessory, setAccessory] = useState<string>("glasses");
    const [habitat, setHabitat] = useState<string>("forest");

    const [generate, setGenerate] = useState<boolean>(false);

    const description = `A Pokémon of type ${type} with a ${color} theme, with a ${accessory}, that lives in the ${habitat} illustrated in a detailed and vibrant art style.`;

    const imageUrl = usePollinationsImage(description, {
        width: 512,
        height: 512,
        seed: Math.floor(Math.random() * 100000),
        model: "flux",
        nologo: false,
    });

    const handleGenerate = () => {
        setGenerate(true);
    };

    if (!token) {
        return (
            <div className="flex items-center justify-center h-screen bg-white text-black">
                <p className="text-xl font-bold border border-red-500 px-6 py-3 rounded-lg shadow-lg">
                    No has iniciado sesión. Por favor, inicia sesión para continuar.
                </p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white text-gray-900 p-8">
            {/* Encabezado */}
            <header className="text-center mb-12">
                <h1 className="text-4xl font-bold text-black">
                    <span className="text-red-500">Poke API 2.0</span> Dashboard
                </h1>
                <p className="text-lg mt-2 text-gray-600">Crea y personaliza tu propio Pokémon único.</p>

				<button
					onClick={() => {
						localStorage.removeItem("githubToken");
						window.location.href = "/";
					}}
					className="px-2 py-1 bg-red-00 text-white font-medium rounded-md focus:outline-none focus:ring-2"
				>log out</button>

				<hr className="border-gray-300 my-8" />
            </header>

            {/* Opciones */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Tipo */}
                <div>
                    <h2 className="text-lg font-semibold text-black mb-4">Tipo</h2>
                    <select
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    >
                        <option value="water">Agua</option>
                        <option value="fire">Fuego</option>
                        <option value="grass">Planta</option>
                        <option value="electric">Eléctrico</option>
                        <option value="steel">Acero</option>
                        <option value="bug">Bicho</option>
                        <option value="ghost">Fantasma</option>
                        <option value="fairy">Hada</option>
                        <option value="ice">Hielo</option>
                        <option value="fighting">Lucha</option>
                        <option value="normal">Normal</option>
                        <option value="psychic">Psíquico</option>
                        <option value="rock">Roca</option>
                        <option value="sinestrous">Siniestro</option>
                        <option value="ground">Tierra</option>
                        <option value="poison">Veneno</option>
                        <option value="flying">Volador</option>
                    </select>
                </div>

                {/* Color */}
                <div>
                    <h2 className="text-lg font-semibold text-black mb-4">Color</h2>
                    <select
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500"
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

                {/* Accesorio */}
                <div>
                    <h2 className="text-lg font-semibold text-black mb-4">Accesorio</h2>
                    <select
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500"
                        value={accessory}
                        onChange={(e) => setAccessory(e.target.value)}
                    >
                        <option value="glasses">Gafas</option>
                        <option value="bow">Lazo</option>
                        <option value="Scarf">Bufanda</option>
                        <option value="Cape">Capa</option>
                        <option value="Necklace">Collar</option>
                        <option value="crown">Corona</option>
                    </select>
                </div>

                {/* Hábitat */}
                <div>
                    <h2 className="text-lg font-semibold text-black mb-4">Hábitat</h2>
                    <select
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500"
                        value={habitat}
                        onChange={(e) => setHabitat(e.target.value)}
                    >
                        <option value="forest">Bosque</option>
                        <option value="mountain">Montaña</option>
                        <option value="desert">Desierto</option>
                        <option value="ocean">Océano</option>
                    </select>
                </div>
            </div>

            {/* Botón de acción */}
            <div className="mt-12 text-center">
                <button
                    onClick={handleGenerate}
                    className="px-6 py-3 bg-red-500 text-white text-lg font-semibold rounded-md hover:bg-red-600 transition-all shadow"
                >
                    Generar Imagen
                </button>
            </div>

            {/* Imagen generada */}
            {generate && (
                <div className="mt-10 text-center">
                    <h2 className="text-2xl font-semibold text-red-500">Tu Pokémon generado</h2>
                    {imageUrl ? (
                        <img
                            src={imageUrl}
                            alt="Generated Pokémon"
                            className="mt-6 mx-auto border border-gray-300 rounded-lg shadow-lg"
                        />
                    ) : (
                        <p className="text-gray-600">Generando imagen...</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Dashboard;

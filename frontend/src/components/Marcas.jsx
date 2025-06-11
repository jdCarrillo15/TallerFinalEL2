import React, { useEffect, useState } from 'react';

function Marcas() {
  const [marcas, setMarcas] = useState([]);
  const [nuevaMarca, setNuevaMarca] = useState('');

  const apiUrl = 'https://g1d3a15d23a19c4-tfjd.adb.us-phoenix-1.oraclecloudapps.com/ords/tfws/api/marcas/';

  useEffect(() => {
    obtenerMarcas();
  }, []);

  const obtenerMarcas = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setMarcas(data.items || []);
    } catch (error) {
      alert('Error al obtener las marcas');
    }
  };

  const eliminarMarca = async (id) => {
    const confirmar = confirm('¿Estás seguro de que quieres eliminar esta marca?');
    if (!confirmar) return;

    try {
      const response = await fetch(apiUrl, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id_marca: id }),
      });

      if (!response.ok) throw new Error();

      alert('Marca eliminada con éxito');
      obtenerMarcas();
    } catch (error) {
      alert('Error al eliminar la marca');
    }
  };

  const agregarMarca = async (e) => {
    e.preventDefault();
    if (!nuevaMarca.trim()) {
      alert('Ingresa un nombre de marca válido');
      return;
    }

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre_marca: nuevaMarca }),
      });

      if (!response.ok) throw new Error();

      alert('Marca añadida con éxito');
      setNuevaMarca('');
      obtenerMarcas();
    } catch (error) {
      alert('Error al agregar la marca');
    }
  };

  return (
    <div className="text-white px-4 py-6">
      <h2 className="text-2xl font-bold mb-4">Lista de Marcas</h2>
      <ul className="mb-6">
        {marcas.map((marca) => (
          <li key={marca.id_marca} className="mb-2 flex items-center gap-4">
            {marca.nombre_marca}
            <button
              onClick={() => eliminarMarca(marca.id_marca)}
              className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>

      <form onSubmit={agregarMarca} className="space-y-4">
        <h3 className="text-xl font-semibold">Añadir nueva marca</h3>
        <input
          type="text"
          value={nuevaMarca}
          onChange={(e) => setNuevaMarca(e.target.value)}
          placeholder="Nombre de la marca"
          className="p-2 text-black rounded w-full max-w-sm"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Añadir Marca
        </button>
      </form>
    </div>
  );
}

export default Marcas;

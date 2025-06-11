import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Proveedores = () => {
  const [proveedores, setProveedores] = useState([]);
  const [nuevo, setNuevo] = useState({ codigo: '', nombre: '', telefono: '' });

  const baseURL = 'https://g1d3a15d23a19c4-tfjd.adb.us-phoenix-1.oraclecloudapps.com/ords/tfws/api/proveedores/';

  const getProveedores = async () => {
    try {
      const res = await axios.get(baseURL);
      setProveedores(res.data.items || []);
    } catch (err) {
      console.error('Error al obtener proveedores:', err);
      alert('Error al obtener los proveedores');
    }
  };

  const postProveedor = async () => {
    try {
      await axios.post(baseURL, nuevo);
      setNuevo({ codigo: '', nombre: '', telefono: '' });
      getProveedores();
    } catch (err) {
      console.error('Error al agregar proveedor:', err);
      alert('Error al agregar el proveedor');
    }
  };

  const deleteProveedor = async (codigo) => {
    const confirmar = window.confirm('¿Estás seguro de que quieres eliminar este proveedor?');
    if (!confirmar) return;

    try {
      await axios.delete(baseURL + codigo);
      getProveedores();
    } catch (err) {
      console.error('Error al eliminar proveedor:', err);
      alert('Error al eliminar el proveedor');
    }
  };

  useEffect(() => {
    getProveedores();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Proveedores</h2>

      <ul className="mb-6 space-y-2">
        {proveedores.map(p => (
          <li key={p.codigo} className="flex items-center justify-between bg-gray-800 p-2 rounded">
            <span>{p.nombre} - Tel: {p.telefono}</span>
            <button
              className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
              onClick={() => deleteProveedor(p.codigo)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mb-2">Agregar Proveedor</h3>
      <div className="space-y-2 max-w-md">
        <input
          className="w-full p-2 border rounded"
          placeholder="Código"
          value={nuevo.codigo}
          onChange={e => setNuevo({ ...nuevo, codigo: e.target.value })}
        />
        <input
          className="w-full p-2 border rounded"
          placeholder="Nombre"
          value={nuevo.nombre}
          onChange={e => setNuevo({ ...nuevo, nombre: e.target.value })}
        />
        <input
          className="w-full p-2 border rounded"
          placeholder="Teléfono"
          value={nuevo.telefono}
          onChange={e => setNuevo({ ...nuevo, telefono: e.target.value })}
        />
        <button
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          onClick={postProveedor}
        >
          Guardar
        </button>
      </div>
    </div>
  );
};

export default Proveedores;

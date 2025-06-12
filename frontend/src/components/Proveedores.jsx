import React, { useEffect, useState } from 'react';

const Proveedores = () => {
  const [proveedores, setProveedores] = useState([]);
  const [nuevoProveedor, setNuevoProveedor] = useState({ codigo: '', nombre: '', telefono: '' });
  const [busqueda, setBusqueda] = useState('');
  const apiUrl = 'https://g1d3a15d23a19c4-tfjd.adb.us-phoenix-1.oraclecloudapps.com/ords/tfws/api/proveedores/';

  useEffect(() => {
    obtenerProveedores();
  }, []);

  const obtenerProveedores = async () => {
    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      setProveedores(data.items || []);
    } catch {
      alert('Error al obtener los proveedores');
    }
  };

  const eliminarProveedor = async (codigo) => {
    if (!confirm('¿Estás seguro de que quieres eliminar este proveedor?')) return;
    try {
      const res = await fetch(apiUrl, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ codigo }),
      });
      if (!res.ok) throw new Error();
      alert('Proveedor eliminado');
      obtenerProveedores();
    } catch {
      alert('Error al eliminar el proveedor');
    }
  };

  const agregarProveedor = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nuevoProveedor),
      });
      if (!res.ok) throw new Error();
      alert('Proveedor agregado');
      setNuevoProveedor({ codigo: '', nombre: '', telefono: '' });
      obtenerProveedores();
    } catch {
      alert('Error al agregar el proveedor');
    }
  };

  const proveedoresFiltrados = proveedores.filter(p =>
    p.nombre?.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="text-white px-4 py-6">
      <h2 className="text-2xl font-bold mb-4">Lista de Proveedores</h2>

      <input
        type="text"
        placeholder="Buscar por nombre"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="mb-4 p-2 text-black rounded w-full max-w-sm"
      />

      <ul className="mb-6">
        {proveedoresFiltrados.map(p => (
          <li key={p.codigo} className="mb-2 flex items-center gap-4">
            {p.nombre} - Tel: {p.telefono}
            <button
              onClick={() => eliminarProveedor(p.codigo)}
              className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>

      <form onSubmit={agregarProveedor} className="space-y-4">
        <h3 className="text-xl font-semibold">Añadir nuevo proveedor</h3>
        <input
          placeholder="Código"
          value={nuevoProveedor.codigo}
          onChange={e => setNuevoProveedor({ ...nuevoProveedor, codigo: e.target.value })}
          className="p-2 text-black rounded w-full max-w-sm"
        />
        <input
          placeholder="Nombre"
          value={nuevoProveedor.nombre}
          onChange={e => setNuevoProveedor({ ...nuevoProveedor, nombre: e.target.value })}
          className="p-2 text-black rounded w-full max-w-sm"
        />
        <input
          placeholder="Teléfono"
          value={nuevoProveedor.telefono}
          onChange={e => setNuevoProveedor({ ...nuevoProveedor, telefono: e.target.value })}
          className="p-2 text-black rounded w-full max-w-sm"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Añadir Proveedor
        </button>
      </form>
    </div>
  );
};

export default Proveedores;
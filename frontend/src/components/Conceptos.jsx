import React, { useEffect, useState } from 'react';

const Conceptos = () => {
  const [conceptos, setConceptos] = useState([]);
  const [nuevoConcepto, setNuevoConcepto] = useState({ id: '', nombre: '', tipo: '', porcentaje: '' });
  const [busqueda, setBusqueda] = useState('');
  const apiUrl = 'https://g1d3a15d23a19c4-tfjd.adb.us-phoenix-1.oraclecloudapps.com/ords/tfws/api/conceptos/';

  useEffect(() => {
    obtenerConceptos();
  }, []);

  const obtenerConceptos = async () => {
    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      setConceptos(data.items || []);
    } catch {
      alert('Error al obtener los conceptos');
    }
  };

  const eliminarConcepto = async (id) => {
    if (!confirm('¿Estás seguro de que quieres eliminar este concepto?')) return;
    try {
      const res = await fetch(apiUrl, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      if (!res.ok) throw new Error();
      alert('Concepto eliminado');
      obtenerConceptos();
    } catch {
      alert('Error al eliminar el concepto');
    }
  };

  const agregarConcepto = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nuevoConcepto),
      });
      if (!res.ok) throw new Error();
      alert('Concepto agregado');
      setNuevoConcepto({ id: '', nombre: '', tipo: '', porcentaje: '' });
      obtenerConceptos();
    } catch {
      alert('Error al agregar el concepto');
    }
  };

  const conceptosFiltrados = conceptos.filter(c =>
    c.nombre?.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="text-white px-4 py-6">
      <h2 className="text-2xl font-bold mb-4">Lista de Conceptos</h2>

      <input
        type="text"
        placeholder="Buscar por nombre"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="mb-4 p-2 text-black rounded w-full max-w-sm"
      />

      <ul className="mb-6">
        {conceptosFiltrados.map(c => (
          <li key={c.id} className="mb-2 flex items-center gap-4">
            {c.nombre} - Tipo: {c.tipo} - {c.porcentaje ?? 'N/A'}%
            <button
              onClick={() => eliminarConcepto(c.id)}
              className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>

      <form onSubmit={agregarConcepto} className="space-y-4">
        <h3 className="text-xl font-semibold">Añadir nuevo concepto</h3>
        <input
          placeholder="ID"
          value={nuevoConcepto.id}
          onChange={e => setNuevoConcepto({ ...nuevoConcepto, id: e.target.value })}
          className="p-2 text-black rounded w-full max-w-sm"
        />
        <input
          placeholder="Nombre"
          value={nuevoConcepto.nombre}
          onChange={e => setNuevoConcepto({ ...nuevoConcepto, nombre: e.target.value })}
          className="p-2 text-black rounded w-full max-w-sm"
        />
        <input
          placeholder="Tipo"
          value={nuevoConcepto.tipo}
          onChange={e => setNuevoConcepto({ ...nuevoConcepto, tipo: e.target.value })}
          className="p-2 text-black rounded w-full max-w-sm"
        />
        <input
          placeholder="Porcentaje"
          value={nuevoConcepto.porcentaje}
          onChange={e => setNuevoConcepto({ ...nuevoConcepto, porcentaje: e.target.value })}
          className="p-2 text-black rounded w-full max-w-sm"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Añadir Concepto
        </button>
      </form>
    </div>
  );
};

export default Conceptos;
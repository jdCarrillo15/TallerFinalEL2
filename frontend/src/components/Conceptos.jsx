import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Conceptos = () => {
  const [conceptos, setConceptos] = useState([]);
  const [nuevo, setNuevo] = useState({ id: '', nombre: '', tipo: '', porcentaje: '' });
  const [busqueda, setBusqueda] = useState('');

  const baseURL = 'https://g1d3a15d23a19c4-tfjd.adb.us-phoenix-1.oraclecloudapps.com/ords/tfws/api/conceptos/';

  const getConceptos = async () => {
    try {
      const res = await axios.get(baseURL);
      setConceptos(res.data.items || []);
    } catch (err) {
      console.error('Error al obtener conceptos:', err);
      alert('Error al obtener los conceptos');
    }
  };

  const postConcepto = async () => {
    try {
      await axios.post(baseURL, nuevo);
      setNuevo({ id: '', nombre: '', tipo: '', porcentaje: '' });
      getConceptos();
    } catch (err) {
      console.error('Error al agregar concepto:', err);
      alert('Error al agregar el concepto');
    }
  };

  const deleteConcepto = async (id) => {
    const confirmar = window.confirm('¿Estás seguro de que quieres eliminar este concepto?');
    if (!confirmar) return;

    try {
      await axios.delete(baseURL + id);
      getConceptos();
    } catch (err) {
      console.error('Error al eliminar concepto:', err);
      alert('Error al eliminar el concepto');
    }
  };

  useEffect(() => {
    getConceptos();
  }, []);

  const filtrados = conceptos.filter(c => c.nombre?.toLowerCase().includes(busqueda.toLowerCase()));

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Conceptos</h2>

      <input
        className="mb-4 p-2 border rounded w-full max-w-md"
        placeholder="Buscar por nombre"
        value={busqueda}
        onChange={e => setBusqueda(e.target.value)}
      />

      <ul className="mb-6 space-y-2">
        {filtrados.map(c => (
          <li key={c.id} className="flex items-center justify-between bg-gray-800 p-2 rounded">
            <span>{c.nombre} - {c.tipo} - {c.porcentaje}%</span>
            <button
              className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
              onClick={() => deleteConcepto(c.id)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mb-2">Agregar Concepto</h3>
      <div className="space-y-2 max-w-md">
        <input
          className="w-full p-2 border rounded"
          placeholder="ID"
          value={nuevo.id}
          onChange={e => setNuevo({ ...nuevo, id: e.target.value })}
        />
        <input
          className="w-full p-2 border rounded"
          placeholder="Nombre"
          value={nuevo.nombre}
          onChange={e => setNuevo({ ...nuevo, nombre: e.target.value })}
        />
        <input
          className="w-full p-2 border rounded"
          placeholder="Tipo"
          value={nuevo.tipo}
          onChange={e => setNuevo({ ...nuevo, tipo: e.target.value })}
        />
        <input
          className="w-full p-2 border rounded"
          placeholder="Porcentaje"
          value={nuevo.porcentaje}
          onChange={e => setNuevo({ ...nuevo, porcentaje: e.target.value })}
        />
        <button
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          onClick={postConcepto}
        >
          Guardar
        </button>
      </div>
    </div>
  );
};

export default Conceptos;

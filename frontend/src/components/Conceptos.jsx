import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Conceptos = () => {
  const [conceptos, setConceptos] = useState([]);
  const [nuevo, setNuevo] = useState({ id: '', nombre: '', tipo: '', porcentaje: '' });
  const [busqueda, setBusqueda] = useState('');

  const baseURL = 'https://g1d3a15d23a19c4-tfjd.adb.us-phoenix-1.oraclecloudapps.com/ords/tfws/api/conceptos/';

  const getConceptos = async () => {
    const res = await axios.get(baseURL);
    setConceptos(res.data.items);
  };

  const postConcepto = async () => {
    await axios.post(baseURL, nuevo);
    getConceptos();
  };

  const deleteConcepto = async (id) => {
    await axios.delete(baseURL + id);
    getConceptos();
  };

  useEffect(() => {
    getConceptos();
  }, []);

  const filtrados = conceptos.filter(c => c.nombre?.toLowerCase().includes(busqueda.toLowerCase()));

  return (
    <div>
      <h2>Conceptos</h2>
      <input placeholder="Buscar por nombre" onChange={e => setBusqueda(e.target.value)} />
      <ul>
        {filtrados.map(c => (
          <li key={c.id}>
            {c.nombre} - {c.tipo} - {c.porcentaje}%
            <button onClick={() => deleteConcepto(c.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <h3>Agregar Concepto</h3>
      <input placeholder="ID" onChange={e => setNuevo({ ...nuevo, id: e.target.value })} />
      <input placeholder="Nombre" onChange={e => setNuevo({ ...nuevo, nombre: e.target.value })} />
      <input placeholder="Tipo" onChange={e => setNuevo({ ...nuevo, tipo: e.target.value })} />
      <input placeholder="Porcentaje" onChange={e => setNuevo({ ...nuevo, porcentaje: e.target.value })} />
      <button onClick={postConcepto}>Guardar</button>
    </div>
  );
};

export default Conceptos;

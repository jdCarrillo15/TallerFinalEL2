import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Marcas = () => {
  const [marcas, setMarcas] = useState([]);
  const [nuevo, setNuevo] = useState({ id_marca: '', nombre_marca: '' });

  const baseURL = 'https://g1d3a15d23a19c4-tfjd.adb.us-phoenix-1.oraclecloudapps.com/ords/tfws/api/marcas/';

  const getMarcas = async () => {
    const res = await axios.get(baseURL);
    setMarcas(res.data.items);
  };

  const postMarca = async () => {
    await axios.post(baseURL, nuevo);
    getMarcas();
  };

  const deleteMarca = async (id) => {
    await axios.delete(baseURL + id);
    getMarcas();
  };

  useEffect(() => {
    getMarcas();
  }, []);

  return (
    <div>
      <h2>Marcas</h2>
      <ul>
        {marcas.map(m => (
          <li key={m.id_marca}>
            {m.nombre_marca}
            <button onClick={() => deleteMarca(m.id_marca)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <h3>Agregar Marca</h3>
      <input placeholder="ID" onChange={e => setNuevo({ ...nuevo, id_marca: e.target.value })} />
      <input placeholder="Nombre" onChange={e => setNuevo({ ...nuevo, nombre_marca: e.target.value })} />
      <button onClick={postMarca}>Guardar</button>
    </div>
  );
};

export default Marcas;

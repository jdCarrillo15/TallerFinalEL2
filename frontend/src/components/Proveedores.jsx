import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Proveedores = () => {
  const [proveedores, setProveedores] = useState([]);
  const [nuevo, setNuevo] = useState({ codigo: '', nombre: '', telefono: '' });
  const [codigoBuscar, setCodigoBuscar] = useState('');

  const baseURL = 'https://g1d3a15d23a19c4-tfjd.adb.us-phoenix-1.oraclecloudapps.com/ords/tfws/api/proveedores/';

  const getProveedores = async () => {
    const res = await axios.get(baseURL);
    setProveedores(res.data.items);
  };

  const postProveedor = async () => {
    await axios.post(baseURL, nuevo);
    getProveedores();
  };

  const deleteProveedor = async (codigo) => {
    await axios.delete(baseURL + codigo);
    getProveedores();
  };

  const buscarProveedor = async () => {
    const url = `https://g1d3a15d23a19c4-tfjd.adb.us-phoenix-1.oraclecloudapps.com/ords/tfws/api/proveedor?codigo=${codigoBuscar}`;
    const res = await axios.get(url);
    setProveedores([res.data.items[0]]);
  };

  useEffect(() => {
    getProveedores();
  }, []);

  return (
    <div>
      <h2>Proveedores</h2>
      <input placeholder="Buscar por código" onChange={e => setCodigoBuscar(e.target.value)} />
      <button onClick={buscarProveedor}>Buscar</button>
      <ul>
        {proveedores.map(p => (
          <li key={p.codigo}>
            {p.nombre} - {p.telefono}
            <button onClick={() => deleteProveedor(p.codigo)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <h3>Agregar Proveedor</h3>
      <input placeholder="Código" onChange={e => setNuevo({ ...nuevo, codigo: e.target.value })} />
      <input placeholder="Nombre" onChange={e => setNuevo({ ...nuevo, nombre: e.target.value })} />
      <input placeholder="Teléfono" onChange={e => setNuevo({ ...nuevo, telefono: e.target.value })} />
      <button onClick={postProveedor}>Guardar</button>
    </div>
  );
};

export default Proveedores;

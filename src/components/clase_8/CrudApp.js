import { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const initialDb = [];

const CrudApp = () => {
  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null);

  const readData = async () => {
    const ENDPOINT = "http://localhost:8000/santos";
    const response = await axios.get(ENDPOINT);
    const db = await response.data;

    setDb(db)
  }; // GET

  useEffect(() => {
    readData()
  }, [])
  
  const createData = async (formData) => {
    formData.id = uuidv4()

    const ENDPOINT = "http://localhost:8000/santos";

    const OPTIONS = {
      method: "POST",
      headers: {"content-type": "application/json"},
      data: JSON.stringify(formData)
    }

    await axios(ENDPOINT, OPTIONS)

    readData()
  }; // POST

  const updateData = async (formData) => {
    const id = formData.id

    const ENDPOINT = `http://localhost:8000/santos/${id}`;

    const OPTIONS = {
      method: "PUT",
      headers: {"content-type": "application/json"},
      data: JSON.stringify(formData)
    }

    await axios(ENDPOINT, OPTIONS)

    readData()
  }; // PUT

  const deleteData = async (caballero) => {
    const id = caballero.id

    const confirmar = confirm(`¿Estás seguro de que queres eliminar a ${caballero.name} de ${caballero.constellation}?`)

    if (confirmar) {
      const ENDPOINT = `http://localhost:8000/santos/${id}`;

      const OPTIONS = {
        method: "DELETE",
        headers: {"content-type": "application/json"},
      }
  
      await axios(ENDPOINT, OPTIONS)
    } else {
      return;
    }

    readData()
  }; // DELETE

  return (
    <div>
      <h2>CRUD App</h2>
      <CrudForm
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      <CrudTable
        data={db}
        deleteData={deleteData}
        setDataToEdit={setDataToEdit}
      />
    </div>
  );
};

export default CrudApp;

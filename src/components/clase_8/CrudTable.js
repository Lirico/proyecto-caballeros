import CrudTableRow from "./CrudTableRow";

const CrudTable = ({ data, deleteData, setDataToEdit }) => {
  return (
    <div>
      <h3>Tabla de Datos</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Constelacion</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td>Sin Datos</td>
            </tr>
          ) : (
            data.map((caballero) => (
              <CrudTableRow
                key={caballero.id}
                caballero={caballero}
                deleteData={deleteData}
                setDataToEdit={setDataToEdit}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
export default CrudTable;

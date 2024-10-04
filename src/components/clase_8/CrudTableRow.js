


const CrudTableRow = ({caballero, deleteData, setDataToEdit}) => {

    const {name, constellation} = caballero;

    return (
      <tr>
          <td>{name}</td>
          <td>{constellation}</td>
          <td>
              <button onClick={() => setDataToEdit(caballero)}>Editar</button>
              <button onClick={() =>  deleteData(caballero)}>Eliminar</button>
          </td>
      </tr>
    )
  }
  
  export default CrudTableRow
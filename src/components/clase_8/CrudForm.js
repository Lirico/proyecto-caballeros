import { useState, useEffect } from "react"


const initialForm = {
  name: "",
  constellation: "",
  id: null
}

const CrudForm = ({createData, updateData, dataToEdit, setDataToEdit}) => {

    const [form, setForm] = useState(initialForm)

    useEffect(() => {
      if(dataToEdit){
        setForm(dataToEdit)
      } else {
        setForm(initialForm)
      }

    }, [dataToEdit]) // null -> {}
    

    const handleChange = (event) => setForm((form) => {
      return {
        ...form,
        [event.target.name]: event.target.value
      }
    })

    const handleSubmit = (event) => {
      event.preventDefault()

      if (!form.name || !form.constellation ) {
        return alert('No pueden haber campos vacios.')
      }

      if (form.id === null) {
        createData(form)
      } else {
        updateData(form)
      }

      handleReset()
    }

    const handleReset = () => {
      setForm(initialForm)
      setDataToEdit(null)
    }

    return (
      <div>
          <h3>Agregar</h3>
          <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Nombre" onChange={handleChange} value={form.name} />
              <input type="text" name="constellation" placeholder="constellation" onChange={handleChange} value={form.constellation}/>
              <input type="submit" value="Enviar"/>
              <input type="reset" value="Limpiar" onClick={handleReset}/>
          </form>
      </div>
    )
  }
  export default CrudForm
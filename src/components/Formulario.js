import { useState } from "react";
import shortid from 'shortid'
import PropTypes from 'prop-types'

//Components
import Error from "./Error";

const Formulario = ({agregarNuevoGasto, setCreatGasto}) => {
    const [nombre, setNombre] = useState('')
    const [gasto, setGasto] = useState(0)
    const [error, setError] = useState(false)

    if(gasto === isNaN) {
        setGasto(0)
    }

    const HandleSubmit = (e) => {
        e.preventDefault()

        //validar
        if(gasto < 1 || isNaN(gasto) || nombre.trim()==='') {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 3000)
            return
        }
        setError(false)

        //construir gasto
        const objetoGasto = {
            Nombre : nombre,
            Cantidad: gasto,
            id: shortid.generate()
        }

        //pasar gasto al componente principal

        agregarNuevoGasto(objetoGasto)
        setCreatGasto(true)

        //resetear

        setNombre('')
        setGasto(0)

    }

  return (
    <form
        onSubmit={HandleSubmit}
    >
      <h2>Agrega tus gastos aqui</h2>
        {
            error ? <Error massage='los valores deben ser validos'/> : null
        }
      <div className="campo">
        <label>
          Nombre Gasto
          <input
            type="text"
            className="u-full-width"
            placeholder="Ej. Transporte"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />
        </label>

        <label>
          Cantidad Gasto
          <input
            type="number" 
            className="u-full-width" 
            placeholder="Ej. 300" 
            value={gasto}
            onChange={e => setGasto(parseInt(e.target.value))}
          />
        </label>

        <input
          type="submit"
          className=" button-primary u-full-width"
          value="Agregar Gasto"
        />
      </div>
    </form>
  );
};

Formulario.propTypes = {
    agregarNuevoGasto: PropTypes.func.isRequired,
    setCreatGasto: PropTypes.func.isRequired
}

export default Formulario;

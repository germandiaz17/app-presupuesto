import { Fragment, useState } from "react";
import Error from "./Error";
import PropTypes from 'prop-types'

const Pregunta = ({ guardarPresupuesto, guardarRestante, vistaPregunta }) => {
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  const HandleChange = (e) => {
    let value = parseInt(e.target.value);
    setCantidad(value);
  };

  const HandleSubmit = (e) => {
    e.preventDefault();

    //validar
    if (cantidad < 1 || isNaN(cantidad)) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
      return;
    }

    //si pasa la validacion
    setError(false);
    guardarPresupuesto(cantidad);
    guardarRestante(cantidad);
    vistaPregunta(false);
  };

  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>

      {error ? <Error massage="El presupuesto esta incorrecto" /> : null}

      <form onSubmit={HandleSubmit}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca Tu Presupuesto"
          onChange={HandleChange}
        />

        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir Presupuesto"
        />
      </form>
    </Fragment>
  );
};


Pregunta.propTypes = {
    guardarPresupuesto: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired,
    vistaPregunta: PropTypes.func.isRequired
}

export default Pregunta;

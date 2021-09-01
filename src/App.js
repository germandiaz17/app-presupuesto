import { useState, useEffect } from "react";

//COMPONENTS
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import ControlPresupuesto from "./components/ControlPresupuesto";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrarPregunta, setMostrarPregunta] = useState(true);
  const [gastos, setGastos] = useState([])
  const [gasto, setGasto] = useState({})
  const [crearGasto, setCreatGasto] = useState(false)

  //UseEffect actualiza el restante

  useEffect(() => {

    //agrega nuevo presupuesto
    if(crearGasto) {
      setGastos([
        ...gastos,
        gasto
      ])

      //resta del presupuesto actual

      const presupuestoRestante = restante - gasto.Cantidad
      setRestante(presupuestoRestante)
      //resetear a false
      setCreatGasto(false)
    }
  }, [crearGasto, gasto, gastos, restante])

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>

        <div className="contenido-principal contenido">
          {mostrarPregunta ? (
            <Pregunta
              guardarPresupuesto={setPresupuesto}
              guardarRestante={setRestante}
              vistaPregunta={setMostrarPregunta}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario 
                  agregarNuevoGasto={setGasto}
                  setCreatGasto={setCreatGasto}
                />
              </div>

              <div className="one-half column">
                <Listado 
                  gastos={gastos}
                />
                <ControlPresupuesto 
                  presupuesto={presupuesto}
                  restante={restante}
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;

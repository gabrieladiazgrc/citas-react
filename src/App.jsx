import Header from "./componentes/header"
import ListadoPaciente from "./componentes/listadoPaciente"
import Error from "./componentes/error"
import Formulario from "./componentes/formulario"
import Paciente from "./componentes/paciente"
import { useState } from "react"

function App() {
  const [pacientes, setPacientes] = useState([]); // Arreglo
  const [paciente, setPaciente] = useState({}); // Objeto
  return (
    <>
      <div className="container mx-auto mt-15">
        <Header/>
        <div className="md:flex">
          <Formulario pacientes={pacientes}
          setPacientes = {setPacientes}
          paciente = {paciente}
          setPaciente = {setPaciente}
          />
          <ListadoPaciente/>
        </div>
      </div>
    </>
  )

}

export default App
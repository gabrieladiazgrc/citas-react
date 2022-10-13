import Header from "./componentes/header"
import ListadoPaciente from "./componentes/listadoPaciente"
import Error from "./componentes/error"
import Formulario from "./componentes/formulario"
import Paciente from "./componentes/paciente"

function App() {
  return (
    <>
      <Header/>
      <ListadoPaciente/>
      <Error/>
      <Formulario/>
      <Paciente/> 
    </>
  )

}

export default App
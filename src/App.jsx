import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import { Container } from 'react-bootstrap';
import Footer from './componentes/Footer';
import FormularioTareas from './componentes/FormularioTareas';

function App() {


  return (
    <>
    <Container className='my-4 mainPage'>
      <h1 className='text-center display-3'>Lista de Tareas</h1>
      <FormularioTareas></FormularioTareas>
    </Container>
    <Footer></Footer>
    </>
  )
}

export default App
import { Button, Form } from "react-bootstrap";
import {useState} from "react";
//import Form from 'react-bootstrap/Form';
import ListaTareas from "./ListaTareas";
const FormularioTareas = () => {
  const [tarea, setTarea] = useState('');
  const [tareas, setTareas] = useState([]);
  const handleSubmit = (e) =>{
    e.preventDefault();
    setTareas([...tareas, tarea])
    //limpiar formulario
    setTarea('');
  }
  const borrarTarea = (nombreTarea)=>{
    const copiaTareas = tareas.filter((tarea)=> tarea !== nombreTarea)
    setTarea(copiaTareas);
  }
  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Form.Group
          className="mb-3 d-flex"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Control
            type="text"
            placeholder="ej: tarea 1"
            minLength={3}
            maxLength={50}
            onChange={(e)=> setTarea(e.target.value)}
            value={tarea}
          />

          <Button variant="info" className="mx-2" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas tareas={tareas} borrarTarea={borrarTarea}></ListaTareas>
    </section>
  );
};

export default FormularioTareas;

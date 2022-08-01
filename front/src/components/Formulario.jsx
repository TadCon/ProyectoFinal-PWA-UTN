import axios from "axios";
import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const Formulario = () => {
  const [inputs, setInputs] = useState({
    nombre: "",
    apellido: "",
    dni: "",
  });

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = async () => {
    await axios.post(process.env.REACT_APP_SERVER + "/crear", inputs);
    //await axios.post(process.env.REACT_APP_LOCAL + "/crear", inputs);
    setInputs({
      nombre: "",
      apellido: "",
      dni: "",
    });
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <h1 className="m-4" style={{textDecoration: "underline"}}>Ingrese los datos del jugador</h1>
        <Form.Group className="pt-3"  style={{ maxWidth: "200px" }}>
          <Form.Label>ID de jugador</Form.Label>
          <Form.Control
            name="dni"
            value={inputs.dni}
            onChange={handleChange}
            placeholder="1, 2, 3, etc."
          />
        </Form.Group> 
      <Form.Group className="pt-3" style={{ maxWidth: "200px" }}>
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            name="nombre"
            value={inputs.nombre}
            onChange={handleChange}
            placeholder="Nombre"
          />
        </Form.Group>
        <Form.Group className="pt-3"  style={{ maxWidth: "200px" }}>
          <Form.Label>Alias</Form.Label>
          <Form.Control
            name="apellido"
            value={inputs.apellido}
            onChange={handleChange}
            placeholder="Alias"
          />
        </Form.Group>
        <Button variant="success" className="m-4" onClick={handleClick}>
        Crear jugador
      </Button>
    </div>

  );
};

export default Formulario;

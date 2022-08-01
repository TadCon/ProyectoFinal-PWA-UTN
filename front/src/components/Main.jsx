import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Contador from "./Contador";

const Main = () => {
  const [personas, setPersonas] = useState([]);
  const [mostrar, setMostrar] = useState(false);

  useEffect(() => {
    const getPersonas = async () => {
      const { data } = await axios.get(process.env.REACT_APP_SERVER); //Dirección de la API o el back
      //const { data } = await axios.get(process.env.REACT_APP_LOCAL); //Dirección local del back
      setPersonas(data.personas);
    };
    getPersonas();
  }, []);

  const handleDelete = async (id) => {
    const { data } = await axios.get(process.env.REACT_APP_SERVER + "/eliminar/" + id); //Dirección de la API o el back
    //const { data } = await axios.delete( process.env.REACT_APP_LOCAL + "/eliminar/" + id); //Dirección local del back
    setPersonas(personas.filter((persona) => persona._id !== id)); //Actualiza el estado junto con la eliminación
  };

  return (
    <div>
      <Row className="d-flex justify-content-around">
        {personas.map((persona) => (
          <Card
            key={persona._id}
            className="m-3 rounded-3 border-dark"
            style={{ width: "30%", padding: "1%", borderWidth: "2px", boxShadow: "4px 4px 10px 5px rgba(0, 0, 0, 0.2)" }}
          >
            <Card.Body id="card">
              <Card.Title id="card">{`${persona.nombre}`}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {`${persona.apellido}`}, ID de jugador: {`${persona.dni}`}
              </Card.Subtitle>
              <br />
              <Contador />
            </Card.Body>

              <div id="eliminarJugador">
                {!mostrar && (
                  <Button size="sm" variant="outline-secondary" onClick={() => setMostrar(!mostrar)}>
                    Eliminar jugador
                  </Button>
                )}
                {mostrar && (
                  <div>
                    ¿Deseas eliminar al jugador? <br />
                    <Button
                      size="sm"
                      variant="danger"
                      onClick={() => {
                        handleDelete(persona._id);
                        setMostrar(!mostrar);
                      }}
                    >
                      SI
                    </Button>
                    <Button size="sm" onClick={() => setMostrar(!mostrar)}>
                      NO
                    </Button>
                  </div>
                )}
              </div>
          </Card>
        ))}
      </Row>
    </div>
  );
};

export default Main;

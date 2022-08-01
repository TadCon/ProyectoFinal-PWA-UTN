import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Landing() {
  return (
    <div className="p-5">
      {" "}
      <h1 style={{ textDecoration: "underline" }}>
        ¡Bienvenido a Monopoly APP!
      </h1>
      <Container className="p-5 container">
        <Row>
          <Col
            style={{
              height: "100vh",
              border: "solid 2px",
              borderRadius: "20% 5%",
              boxShadow: "4px 4px 10px 5px rgba(0, 0, 0, 0.2)",
            }}
            className="me-3"
          >
            <h3 style={{ textDecoration: "underline" }} className="m-5">
              Descripción:
            </h3>
            <h5 style={{ lineHeight: "45px" }} className="m-5">
              Esta es una aplicación complementaria al juego de mesa "Monopoly",
              creada para suplir el uso de los billetes y llevar registro de las
              ganancias y las pérdidas a lo largo del juego.
              <br />
              1. Leé las recomendaciones del bloque de al lado :D
              <br />
              2. Registrá a cada jugador en la sección "Crear jugadores"
              <br />
              3. Clickeá en la sección Monopoly para hacer uso de la APP.
            </h5>
          </Col>
          <Col
            style={{
              height: "100vh",
              border: "solid 2px",
              borderRadius: "5% 20%",
              boxShadow: "4px 4px 10px 5px rgba(0, 0, 0, 0.2)",
            }}
            className="me-3"
          >
            <h3 style={{ textDecoration: "underline" }} className="m-5">
              A tener en cuenta:
            </h3>
            <h5 style={{ lineHeight: "45px" }} className="m-5">
              La APP aun está en desarrollo. <br /> <br /> - Al registrar un jugador con un ID
              ya existente, se sobreescribirán sus datos. <br /><br /> - Si salís de la
              sección Monopoly, los contadores se reiniciarán (aun está
              pendiente conectar esas variables con una DB).
            </h5>
          </Col>
        </Row>{" "}
      </Container>
    </div>
  );
}

export default Landing;

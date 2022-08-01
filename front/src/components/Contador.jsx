import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const Contador = () => {
  const [contador, setContador] = useState(1500);
  const [acumuladorGanancias, setAcumuladorGanancias] = useState(0);
  const [acumuladorPerdidas, setAcumuladorPerdidas] = useState(0);

  // ADD
  const handleAdd = () => {
    setContador(contador + 1);
    setAcumuladorGanancias(acumuladorGanancias + 1);
  };
  const handleAddFive = () => {
    setContador(contador + 5);
    setAcumuladorGanancias(acumuladorGanancias + 5);
  };
  const handleAddTen = () => {
    setContador(contador + 10);
    setAcumuladorGanancias(acumuladorGanancias + 10);
  };
  const handleAddHundred = () => {
    setContador(contador + 100);
    setAcumuladorGanancias(acumuladorGanancias + 100);
  };

  //SUBSTRACT
  const handleSubstract = () => {
    setContador(contador - 1);
    setAcumuladorPerdidas(acumuladorPerdidas + 1);
  };
  const handleSubstractFive = () => {
    setContador(contador - 5);
    setAcumuladorPerdidas(acumuladorPerdidas + 5);
  };
  const handleSubstractTen = () => {
    setContador(contador - 10);
    setAcumuladorPerdidas(acumuladorPerdidas + 10);
  };
  const handleSubstractHundred = () => {
    setContador(contador - 100);
    setAcumuladorPerdidas(acumuladorPerdidas + 100);
  };

  return (
    <div>
      <h3>Dinero actual: $ {contador}</h3>
      <Container className="my-3">
        <Row>
          <Col>
            {" "}
            <h5>Cobrar</h5>
            <ButtonGroup>
              <Button variant="success" onClick={handleAdd}>
                +1
              </Button>
              <Button variant="success" onClick={handleAddFive}>
                +5
              </Button>
              <Button variant="success" onClick={handleAddTen}>
                +10
              </Button>
              <Button variant="success" onClick={handleAddHundred}>
                +100
              </Button>
            </ButtonGroup>
            <h5>Pagar</h5>
            <ButtonGroup>
              <Button variant="warning" onClick={handleSubstract}>
                -1
              </Button>
              <Button variant="warning" onClick={handleSubstractFive}>
                -5
              </Button>
              <Button variant="warning" onClick={handleSubstractTen}>
                -10
              </Button>
              <Button variant="warning" onClick={handleSubstractHundred}>
                -100
              </Button>
            </ButtonGroup>{" "}
          </Col>
        </Row>
      </Container>
      <Container className="my-2">
        <Row>
          <Col>
            <h6>Ganancias: $ {acumuladorGanancias}</h6>
          </Col>
          <Col>
            <h6>Pérdidas: $ {acumuladorPerdidas}</h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contador;

import { Component, useState } from "react";
import { Form, Button, Col, Row, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [city, setCity] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const resp = await fetch(
        "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=5e12cf9531aba87ddd2547a0227a136f"
      );
      const data = await resp.json();
      const info = await data[0];
      fetchMeteo(info);
    } catch (error) {}
  };

  const fetchMeteo = async (info) => {
    try {
      const resp = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?lat=" +
          info.lat +
          "&lon=" +
          info.lon +
          "&appid=5e12cf9531aba87ddd2547a0227a136f"
      );
      const data = await resp.json();
      dispatch({ type: "SET_METEO", payload: data });
      fetchMeteoDays(data);
    } catch (error) {}
  };

  const fetchMeteoDays = async (meteo) => {
    try {
      const resp = await fetch(
        "https://api.openweathermap.org/data/2.5/forecast?lat=" +
          meteo.coord.lat +
          "&lon=" +
          meteo.coord.lon +
          "&appid=5e12cf9531aba87ddd2547a0227a136f"
      );
      const data = await resp.json();
      dispatch({ type: "SET_METEO_D", payload: data });
      navigate("/meteo");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <h1 className="text-danger mt-5">Cerca previsione nella tua città</h1>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <Row className="mt-5">
          <Col xs="10">
            <Form.Control
              type="text"
              onChange={(event) => setCity(event.target.value)}
              placeholder="inserisci il nome di una città"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="2">
            <Button type="submit">Cerca</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Home;

import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const Details = () => {
  const meteo = useSelector((stato) => stato.meteo);
  const meteoDays = useSelector((stato) => stato.meteoDays);
  const list = meteoDays.list;
  const icon = meteo.weather[0].icon;
  const description = meteo.weather[0].description;
  const temp = parseInt(meteo.main.temp - 273.15);
  const tempMin = parseInt(meteo.main.temp_max - 273.15);
  const tempMax = parseInt(meteo.main.temp_min - 273.15);

  return (
    <Container>
      <h1 className="mt-5 text-danger">Previsioni Del Meteo - {meteo.name}</h1>
      <Row className="justify-content-center  mt-5">
        <Col xs={12} xl={8}>
          <Row className="contenitore justify-content-between bg-meteo">
            <Col xs={3}>
              <div className="ms-3">
                <h4 className="temp ">{temp}°</h4>
                <img src={"http://openweathermap.org/img/w/" + icon + ".png"} style={{ width: "200px" }} alt="" />
              </div>
            </Col>
            <Col xs={7} className="text-start">
              <h3 className="fs-3 mt-5">{description}</h3>
              <h2 className="text-info mt-2">MIN: {tempMin}°</h2>
              <h2 className="text-danger mt-2">MAX: {tempMax}°</h2>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <h2 className="text-danger">Il meteo per le prossime ore:</h2>
              <ListGroup>
                {list.map((meteo) => (
                  <ListGroup.Item className="bg-meteo mt-2 contenitore">
                    <Row className="align-items-center ">
                      <Col xs={2}>{meteo.dt_txt}</Col>
                      <Col xs={2}>
                        <img src={"http://openweathermap.org/img/w/" + meteo.weather[0].icon + ".png"} alt="" />
                      </Col>
                      <Col xs={4}>{meteo.weather[0].description}</Col>
                      <Col xs={4}>{parseInt(meteo.main.temp - 273.15)}°</Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Details;

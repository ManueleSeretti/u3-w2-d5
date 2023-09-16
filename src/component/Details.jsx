import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import sfondo from "../asset/sfondo.jpg";

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
      <h1 className="mt-5 text-info">Previsioni Del Meteo - {meteo.name}</h1>
      <Row className="justify-content-center  mt-5">
        <Col xs={10} sm={8} md={7} lg={5}>
          <Row className="contenitore justify-content-between bg-meteo">
            <Col xs={12}>
              <div className="ms-3 position-relative">
                <h3 className="fs-2 mt-5">{description}</h3>
                <hr />
                <h4 className="temp">{temp}°</h4>
                <img
                  className="m-0"
                  src={"http://openweathermap.org/img/w/" + icon + ".png"}
                  style={{ width: "200px" }}
                  alt=""
                />
              </div>
            </Col>
            <Col xs={12} className="text-start">
              <hr />
              <div className="d-flex justify-content-around align-items-center mb-5">
                <div
                  style={{
                    backgroundColor: "#e5d5b7",
                    border: " 1px solid black",
                    borderRadius: "5px",
                    paddingInline: "5px",
                  }}
                >
                  <h3 className="text-info mt-2">MIN: {tempMin}°</h3>
                  <h3 className="text-danger mt-2">MAX: {tempMax}°</h3>
                </div>
                <div className="d-flex align-items-center">
                  <div className="span-descr d-flex flex-column justify-content-center align-items-center mx-2">
                    <i class="bi bi-wind"></i>
                    <span className="text-center">{meteo.wind.speed} km/h</span>
                  </div>
                  <div className="span-descr d-flex flex-column justify-content-center align-items-center  mx-2">
                    <i class="bi bi-droplet"></i>
                    <span>{meteo.main.humidity} %</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={12} xl={8}>
          <Row className="mt-5">
            <Col>
              <h2 className="text-info">Il meteo per le prossime ore:</h2>
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

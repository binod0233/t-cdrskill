import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Headings from "../Headings";
import Paragraphs from "../Paragraphs";
import parse from "html-react-parser";
const Wh = ({ data }) => {
  const { CDRreport, image_title } = data;
  return (
    <div style={{ background: "#E5E5E5" }}>
      <Container className="pt-5">
        <Headings title={CDRreport?.title} />
        <Paragraphs data={CDRreport && parse(CDRreport?.paragraph)} />
        <Row>
          {image_title &&
            image_title.map((item, index) => {
              return (
                <Col
                  key={item.id}
                  md={3}
                  xs={6}
                  className="d-flex flex-column justify-content-center align-items-center"
                >
                  <div
                    style={{
                      height: "100px",
                      width: "100px",
                      borderRadius: "55%",
                      backgroundColor: "#017CC9",
                    }}
                  >
                    <img
                      style={{
                        objectFit: "contain",
                        height: "60%",
                        width: "60%",
                        margin: "18px 0 0 22px",
                      }}
                      src={item?.image?.data?.attributes?.url}
                      alt="licensed-professional-final-1"
                      className="img-fluid"
                    ></img>
                  </div>
                  <div
                    className="ourCDRServicesTitle"
                    style={{
                      marginTop: "5px",
                      textAlign: "center",
                      fontFamily: "Asap",
                      fontWeight: "700",
                      fontSize: "18px",
                    }}
                  >
                    {item?.title}
                  </div>
                </Col>
              );
            })}
        </Row>

        {/* <Row>
          <Col
            md={3}
            xs={6}
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <div
              style={{
                height: "100px",
                width: "100px",
                borderRadius: "55%",
                backgroundColor: "#017CC9",
              }}
            >
              <img
                style={{
                  objectFit: "contain",
                  height: "60%",
                  width: "60%",
                  margin: "18px 0 0 22px",
                }}
                src="/images/CDRWriting/1.png"
                alt="licensed-professional-final-1"
                className="img-fluid"
              ></img>
            </div>
            <div
              className="ourCDRServicesTitle"
              style={{
                marginTop: "5px",
                textAlign: "center",
                fontFamily: "Asap",
                fontWeight: "700",
                fontSize: "18px",
              }}
            >
              3 Career Episodes
            </div>
          </Col>
          <Col
            md={3}
            xs={6}
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <div
              style={{
                height: "100px",
                width: "100px",
                borderRadius: "55%",
                backgroundColor: "#017CC9",
              }}
            >
              <img
                style={{
                  objectFit: "contain",
                  height: "60%",
                  width: "60%",
                  margin: "18px 0 0 22px",
                }}
                src="/images/CDRWriting/2.png"
                alt="licensed-professional-final-1"
                className="img-fluid"
              ></img>
            </div>
            <div
              style={{
                marginTop: "5px",
                textAlign: "center",
                fontFamily: "Asap",
                fontWeight: "700",
                fontSize: "18px",
              }}
              className="ourCDRServicesTitle"
            >
              Summary Statement
            </div>
          </Col>
          <Col
            md={3}
            xs={6}
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <div
              style={{
                height: "100px",
                width: "100px",
                borderRadius: "55%",
                backgroundColor: "#017CC9",
              }}
            >
              <img
                style={{
                  objectFit: "contain",
                  height: "60%",
                  width: "60%",
                  margin: "18px 0 0 22px",
                }}
                src="/images/CDRWriting/3.png"
                alt="licensed-professional-final-1"
                className="img-fluid"
              ></img>
            </div>
            <div
              style={{
                marginTop: "5px",
                textAlign: "center",
                fontFamily: "Asap",
                fontWeight: "700",
                fontSize: "18px",
              }}
              className="ourCDRServicesTitle"
            >
              Continuing Professional Development
            </div>
          </Col>
          <Col
            md={3}
            xs={6}
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <div
              style={{
                height: "100px",
                width: "100px",
                borderRadius: "55%",
                backgroundColor: "#017CC9",
              }}
            >
              <img
                style={{
                  objectFit: "contain",
                  height: "60%",
                  width: "60%",
                  margin: "18px 0 0 22px",
                }}
                src="/images/CDRWriting/4.png"
                alt="licensed-professional-final-1"
                className="img-fluid"
              ></img>
            </div>
            <div
              style={{
                marginTop: "5px",
                textAlign: "center",
                fontFamily: "Asap",
                fontWeight: "700",
                fontSize: "18px",
              }}
              className="ourCDRServicesTitle"
            >
              Cv-Resume
            </div>
          </Col>
        </Row> */}
      </Container>
    </div>
  );
};

export default Wh;

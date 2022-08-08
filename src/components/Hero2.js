import Chatra from "@chatra/chatra";
import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Hero2.css";

const Hero2 = ({ title, data, buttonName, link }) => {
  const navigate = useNavigate();
  return (
    <div className="acceptedBackgrounded ">
      <Container className="pt-3">
        <h1 className="CDRReportAcceptedHeading">{title}</h1>
        <p className="CDRReportAcceptParagraph">{data}</p>
        <Row className="d-flex justify-content-center">
          <Button
            className="CDRReportAcceptButton"
            style={{
              width: "fit-content",
              color: "white",
              padding: "4px 20px",
              background: " #017CC9",
              border: "none",
              fontSize: "20px",
              marginBottom: "20px",
            }}
            onClick={() => {
              if (link) navigate(link);
              else {
                Chatra("openChat", true);
              }
            }}
          >
            {buttonName}
          </Button>
        </Row>
      </Container>
    </div>
  );
};

export default Hero2;

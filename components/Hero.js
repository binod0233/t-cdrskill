import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Row, Col, Form, Button } from "react-bootstrap";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Chatra from "@chatra/chatra";

const Hero = ({ title, details }) => {
  const form = useRef();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const submitFormhandler = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_swmc1ha",
        "template_u77tatf",
        form.current,
        "hWJYhr4QPZh-TxVMc"
      )
      .then(
        (result) => {
          alert("Email sent.");
          setFullName("");
          setEmail("");
          setPhone("");
          setMessage("");
        },
        (error) => {
          alert("Sorry something went wrong.");
        }
      );
  };
  return (
    <div className="heroScreen">
      <div className="container px-3 px-md-5">
        <Row>
          <Col md={6} xs={12} className="text-white mt-md-5 pt-md-5">
            <h2 className="mt-5  text-center text-md-start">{title}</h2>
            <p className="text-center text-md-start">{details}</p>
            <Row className="d-flex justify-content-center justify-content-md-start   align-items-center">
              <>
                <Button
                  style={{
                    background: "#017CC9",
                    width: "fit-content",
                    marginLeft: "20px",
                    border: "none",
                  }}
                  onClick={() => LC_API.open_chat_window()}
                >
                  Chat with us
                </Button>
              </>
            </Row>
            <br />
            <p className="text-center text-md-start">
              <strong>
                Or call our writers at
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  href="https://api.whatsapp.com/send?phone=61481615807"
                >
                  +61 481 615 807
                </a>
              </strong>
            </p>
            <div className="d-flex justify-content-center justify-content-md-start">
              <div
                className="heroInputButton"
                style={{
                  width: "350px",
                  height: "35px",
                  background: "white",
                  borderRadius: "5px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingLeft: "5px",
                }}
              >
                <div className="p-2 listText" style={{ color: "#203546" }}>
                  Do you want Free CDR Sample?
                </div>
                <Button
                  className="listText"
                  style={{
                    float: "right",
                    marginRight: "5px",
                    padding: "3px 7px",
                  }}
                  onClick={() => Chatra("openChat", true)}
                >
                  Download
                </Button>
              </div>
            </div>
          </Col>

          <Col className="mt-5 formContainerColumn" md={6} xs={12}>
            <Form
              ref={form}
              onSubmit={submitFormhandler}
              className="bg-white p-4 formContainer"
            >
              <div className="d-flex flex-column justify-content-center align-items-center">
                <h2>Get Instant help</h2>
              </div>

              <Form.Group className="mb-3" controlId="fullName">
                <Form.Control
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="inputField"
                  name="fullName"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Control
                  type="text"
                  placeholder="Email"
                  value={email}
                  className="inputField"
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group controlId="contactNumber">
                  <PhoneInput
                    className="inputField"
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={setPhone}
                    name="phone"
                  />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="message">
                <Form.Control
                  as="textarea"
                  rows={6}
                  placeholder="Your message"
                  value={message}
                  className="inputField"
                  onChange={(e) => setMessage(e.target.value)}
                  name="message"
                />
              </Form.Group>
              <Row className="d-flex align-items-center justify-content-center">
                <Button
                  className="formSubmitButton"
                  variant="primary"
                  type="submit"
                >
                  Submit
                </Button>
              </Row>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Hero;

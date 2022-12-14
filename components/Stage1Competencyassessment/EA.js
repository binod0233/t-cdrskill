import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Headings from "../Headings";
import Paragraphs from "../Paragraphs";
import parse from "html-react-parser";
const EA = ({ data }) => {
  const { content3, doyou_data } = data;

  return (
    <Container className="py-5">
      <Headings title={content3[3]?.title} />
      <Paragraphs
        data={content3[3]?.paragraph && parse(content3[3].paragraph)}
      />

      <Row className="mobileScreenSteps">
        {doyou_data.map((item, index) => {
          return (
            <Col key={item?.id} md={4} className="px-4">
              <div className="d-flex justify-content-center">
                <img
                  src={item?.image?.data?.attributes?.url}
                  alt="one"
                  className="img-fluid stepsOneImage"
                />
              </div>
              <div className="cpdWritingCard p-2 my-3 my-md-0 CPDCard">
                <p
                  className=" my-3 my-md-2 ourCDRServicesParagraph"
                  style={{
                    textAlign: "center",
                    fontFamily: "Asap",
                    color: "#666666",
                  }}
                >
                  {item?.title}{" "}
                </p>
              </div>
            </Col>
          );
        })}{" "}
        {/* <Col md={4} className="px-4">
          <div className="d-flex justify-content-center">
            <img
              src="/images/Stage1CompetencyAssessment/one.png"
              alt="one"
              className="img-fluid stepsOneImage"
            />
          </div>
          <div className="cpdWritingCard p-2 my-3 my-md-0 CPDCard">
            <p
              className=" my-3 my-md-2 ourCDRServicesParagraph"
              style={{
                textAlign: "center",
                fontFamily: "Asap",
                color: "#666666",
              }}
            >
              <strong>
                If you hold an Australian Engineering qualification that has not
                been accreted by Engineers Australia,{" "}
              </strong>
              you need to show your competency through Stage 1 Assessment.
            </p>
          </div>
        </Col>
        <Col md={4} className="px-3">
          <div className="d-flex justify-content-center">
            <img
              src="/images/Stage1CompetencyAssessment/two.png"
              alt="one"
              className="img-fluid stepsOneImage"
            />
          </div>
          <div className="cpdWritingCard p-2 my-3 my-md-0 CPDCard">
            <p
              className=" my-3 my-md-2 ourCDRServicesParagraph"
              style={{
                textAlign: "center",
                fontFamily: "Asap",
                color: "#666666",
              }}
            >
              <strong>
                {" "}
                If you hold engineering qualifications from overseas countries
                that are not recognised by Engineers Australia,{" "}
              </strong>
              to be a member you need to show your competency through Stage 1
              Assessment.
            </p>
          </div>
        </Col>
        <Col md={4} className="px-3">
          <div className="d-flex justify-content-center">
            <img
              src="/images/Stage1CompetencyAssessment/three.png"
              alt="one"
              className="img-fluid stepsOneImage"
            />
          </div>
          <div className="cpdWritingCard p-2 my-3 my-md-0 CPDCard">
            <p
              className=" my-3 my-md-2 ourCDRServicesParagraph"
              style={{
                textAlign: "center",
                fontFamily: "Asap",
                color: "#666666",
              }}
            >
              <strong>
                {" "}
                If you hold an undergraduate engineering-related degree but do
                not have a post-graduate engineering qualification,{" "}
              </strong>
              you need to show your competency through Stage 1 Assessment.
            </p>
          </div>
        </Col> */}
      </Row>
    </Container>
  );
};

export default EA;

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Headings from "../Headings";
import Paragraphs from "../Paragraphs";

const CDRSample = ({ list }) => {
  console.log(list);
  return (
    <Container>
      {list.map((l) => (
        <>
          <h5
            style={{
              color: "#203546",
              fontFamily: "Century Gothic",
              fontWeight: "700",
              fontSize: "18x",
            }}
          >
            {l.sample.title}
          </h5>
          <Paragraphs data={l.sample.data} />
          {l.sample.list?.map((a) => (
            <Row>
              <Col xs={1} className="pt-1">
                <i
                  style={{ height: "30px", width: "30px", float: "right" }}
                  className="fa-solid fa-check"
                />
              </Col>
              <Col xs={11}>
                <Paragraphs data={a} />
              </Col>
            </Row>
          ))}
        </>
      ))}
    </Container>
  );
};

export default CDRSample;

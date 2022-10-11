import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import parse from "html-react-parser";

const Ouragents = ({ agentRes }) => {
  const dataList = [
    {
      image: "/images/MeetOurAdvisors/Sarala.png",
      title: `Anya Pathak`,
      data: `Talk with Anya`,
      phone: "61481615807",
    },
    {
      image: `/images/MeetOurAdvisors/sasha.png`,
      title: `Sansha Pandey`,
      data: `Talk with Sansha`,
      phone: "61481612927",
    },
    {
      image: `images/MeetOurAdvisors/roshan.png`,
      title: `Sameer Thapa`,
      data: `Talk with Sameer`,
      phone: "61481615194",
    },
    {
      image: `images/MeetOurAdvisors/jenny.png`,
      title: `Janvi Rai`,
      data: `Talk with Janvi`,
      phone: "61481612162",
    },
  ];
  const { hero, cdr_agents } = agentRes;
  return (
    <div>
      <Container className="p-5">
        <h1
          style={{
            color: " #203546",
            fontFamily: "Century Gothic",
            fontWeight: "700",
            textAlign: "center",
          }}
        >
          {hero?.title}
        </h1>
        <p
          style={{
            color: "#666",
            fontFamily: "Asap",
            fontWeight: "400",
            textAlign: "center",
            paddingTop: "20px",
          }}
          className="pb-5"
        >
          {hero?.paragraph && parse(hero.paragraph)}
        </p>

        <Row>
          {cdr_agents?.data?.map((d, index) => (
            <Col md={3} className="py-5" key={index}>
              <div
                style={{
                  borderTop: "10px solid #017CC9",
                  backgroundColor: "#FDFDFD",
                }}
                className="d-flex flex-column justify-content-center align-items-center p-4"
              >
                <img
                  src={d?.attributes?.image?.data?.attributes?.url}
                  alt="agents"
                />

                <h3
                  style={{
                    fontFamily: "Asap",
                    fontWeight: "700",
                    color: "#000",
                  }}
                  className="pt-4"
                >
                  {d?.attributes?.name}{" "}
                </h3>
                <div style={{ color: "#666666", fontFamily: "Asap" }}>
                  {d?.attributes?.title}
                </div>
                <div className="d-flex flex-row pe-2 my-2">
                  <FacebookIcon className="" style={{ color: "#3B5998" }} />
                  <LinkedInIcon className="" style={{ color: "#0E76A8" }} />
                  <InstagramIcon className="" style={{ color: "#405DE6" }} />
                </div>

                <div
                  style={{ backgroundColor: "#38A559", borderRadius: "10px" }}
                  className="px-3 pt-2"
                >
                  {/* <a
                    href={`https://api.whatsapp.com/send?phone=${dataList[index]?.phone}`}
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    <WhatsappOutlined />
                  </a> */}
                  <a
                    href={`https://api.whatsapp.com/send?phone=${dataList[index]?.phone}`}
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    <h6
                      style={{
                        color: "#FFF",
                        fontFamily: "Arial",
                        fontWeight: "700",
                      }}
                    >
                      <WhatsAppIcon />
                      {dataList[index]?.data}
                    </h6>
                  </a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Ouragents;

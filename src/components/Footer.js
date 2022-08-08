import { Button, Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="wholeFooter" >
      <Row className="upperFooter px-md-5 px-2">
        <Col
          xs={6}
          md={3}
          style={{
            fontFamily: "Asap",
            fontWeight: "400",
            paddingRight: "30px",
            color: "#747474",
          }}
          className="footerAboutUs"
        >
          <strong style={{ color: "#203546" }}>About Us</strong>
          <br />
          CDRskillassessment is an independent organization driven by
          professional writers that offer all engineering professionals the best
          help and guidance with the finest CDR writing and reviewing services
          for immigration to Australia. The amazing Team of Professional Writers
          at CDRskillassessment are Australian with a solid understanding of
          Engineers Australia's stringent criteria outlined in the MSA manual
          <br />
          <br />
          <strong>Follow us on</strong>
          <br />
          <div
            className="d-flex justify-content-start"
            style={{ fontSize: "20px" }}
          >
            <a
              href="https://twitter.com/CdrSkill"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "white" }}
            >
              <img src="/images/s3.png" alt="" className="img-fluid ms-2" />
            </a>
            <a
              href="https://www.facebook.com/CDRSkill-Assessment-114392794578547"
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              <img src="/images/s2.png" alt="" className="img-fluid " />
            </a>
            <a
              href="https://www.instagram.com/cdrskillassessment/"
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              <img src="/images/s0.png" alt="" className="img-fluid ms-2" />
            </a>
            <a
              href="https://www.linkedin.com/in/cdr-skill-assessment-883648238/"
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: "none",
                color: "white",
                marginleft: "10px",
              }}
            >
              {" "}
              <img src="/images/s1.png" alt="" className="img-fluid ms-2" />
            </a>
          </div>
        </Col>

        <Col
          xs={6}
          md={3}
          className="mb-4 "
          style={{ fontFamily: "Asap", fontWeight: "400", color: "#203546" }}
        >
          <strong className="footerTitle">Services</strong>
          <br />
          <Link
            className="footerServices"
            to="/services/cdr-writing-service-australia"
          >
            CDR Writing
          </Link>
          <br />
          <Link
            className="footerServices"
            to="/services/career-episode-writing-australia"
          >
            Career Episode Writing
          </Link>
          <br />
          <Link
            className="footerServices"
            to="/services/summary-statement-writing-australia"
          >
            Summary Statement Writing
          </Link>
          <br />
          <Link
            className="footerServices"
            to="/services/stage-1-competency-assessment-australia"
          >
            Stage 1 Competency Assessment
          </Link>
          <br />
          <Link
            className="footerServices"
            to="/services/stage-2-competency-assessment-australia"
          >
            Stage 2 Competency Assessment
          </Link>
          <br />
          <Link
            className="footerServices"
            to="/services/cdr-reviewing-australia"
          >
            CDR Reviewing
          </Link>
          <br />
          <Link
            className="footerServices"
            to="/services/plagiarism-checking-and-removal"
          >
            CDR Plagiarism Checking & Removal
          </Link>
          <br />
          <Link
            className="footerServices"
            to="/services/professional-resume-writing-australia"
          >
            Resume Writing
          </Link>
        </Col>
        <Col xs={6} md={3} style={{ fontFamily: "Asap", fontWeight: "400" }}>
          <strong>Quick Links</strong>
          <br />
          <Link className="footerServices" to="/blogs">
            Blogs
          </Link>

          <br />
          <Link className="footerServices" to="/contact-us">
            Contact Us
          </Link>

          <br />
          <Link className="footerServices" to="/our-agents">
            Meet Our Advisors
          </Link>

          <br />
          <Link className="footerServices" to="/testimonials">
            Testimonials
          </Link>

          <br />
          <Link className="footerServices" to="/disclaimer">
            Disclaimer
          </Link>

          <br />
          <Link className="footerServices" to="/refund-policy">
            Refund Policy
          </Link>

          <br />
        </Col>
        <Col xs={6} md={3} style={{ fontFamily: "Asap", fontWeight: "400" }}>
          <img
            src="/footerLogo.png"
            alt="logo"
            style={{ height: "100px", marginLeft: "-50px", marginTop: "-20px" }}
            className="img-fluid"
          />
          <br />
          <i className="fa-solid fa-location-dot"></i>
          &nbsp;&nbsp;&nbsp;&nbsp;Sydney, Australia
          <br />
          <a
            style={{ textDecoration: "none", color: " #203546" }}
            href="mailto:info@cdrskillassessment.com"
          >
            <i className="fa-solid fa-envelope"></i>&nbsp;&nbsp;
            info@cdrskillassessment.com
          </a>
          <br />
          <a
            style={{ textDecoration: "none", color: "#203546" }}
            href="https://api.whatsapp.com/send?phone=+61481615807"
          >
            <i class="fa-brands fa-whatsapp"></i>&nbsp;&nbsp;&nbsp;+61 481 615 807
          </a>
          <br />
          <br />
          <strong>Request a Sample</strong> <br />
          <Button>
            <a
              href="mailto:download@cdrskillassessment.com"
              style={{ textDecoration: "none", color: "white" }}
            >
              Request through mail
            </a>
          </Button>
          <br />
        </Col>
      </Row>
      <Row className="lowerFooter text-white">
        <p style={{ fontFamily: "Asap" }}>
          {" "}
          <span style={{ float: "left" }}>
            All rights reserved | Copyright © cdrskillassessment.com
          </span>
          <span
            className="me-md-5 pe-md-5"
            style={{ float: "right", cursor: "pointer", fontWeight: "400" }}
            onClick={() => navigate("/refund-policy")}
          >
            Refund Policy
          </span>
          <span
            className="me-5 pe-5"
            style={{ float: "right", cursor: "pointer", fontWeight: "400" }}
            onClick={() => navigate("/privacy-policy")}
          >
            Terms and conditions
          </span>
        </p>
      </Row>
    </div>
  );
};

export default Footer;

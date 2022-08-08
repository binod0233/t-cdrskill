import { useState, useEffect } from "react";
import "./Header.css";
import {
  Navbar,
  Nav,
  NavDropdown,
  Button, 
  Container,
  Col,
  Row,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ scrollToTop }) => {
  const navigate = useNavigate();
  const [show, setShow] = useState();
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };
  
  useEffect(() => {
    scrollToTop();
  }, [window.location.pathname]);

  return (
    <div className="header">
      <Navbar bg="light" className="headernavbar px-5" expand="lg">
        <Container>
          <Navbar.Brand href="/" style={{ marginLeft: "-80px" }}>
            <div className="headerImageContainer">
              <img src="/logo.png" className="img-fluid" alt="logo" />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown
                title="CDR Services"
                id="basic-nav-dropdown"
                style={{ color: "white", margin: "0 2rem" }}
                show={show}
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
                onClick={() => navigate("/services")}
              >
                <NavDropdown.Item
                  href="/services/cdr-writing-service-australia"
                  style={{
                    color: "white",
                    background: "#203546",
                  }}
                >
                  CDR Writing
                </NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item
                  href=" /services/career-episode-writing-australia"
                  style={{ color: "white", background: "#203546" }}
                >
                  Career Episode Writing
                </NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item
                  href="/services/summary-statement-writing-australia"
                  style={{ color: "white", background: "#203546" }}
                >
                  Summary Statement Writing
                </NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item
                  href="/services/stage-1-competency-assessment-australia"
                  style={{ color: "white", background: "#203546" }}
                >
                  Stage 1 Competency Assessment
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item
                  href="/services/stage-2-competency-assessment-australia"
                  style={{ color: "white", background: "#203546" }}
                >
                  Stage 2 Competency Assessment
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item
                  href="/services/cdr-reviewing-australia"
                  style={{ color: "white", background: "#203546" }}
                >
                  CDR Reviewing
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item
                  href="/services/cpd-writing-australia"
                  style={{ color: "white", background: "#203546" }}
                >
                  CPD Writing
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item
                  href=" /services/plagiarism-checking-and-removal"
                  style={{ color: "white", background: "#203546" }}
                >
                  CDR Plagiarism Checking & Removal
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item
                  href="/services/professional-resume-writing-australia"
                  style={{ color: "white", background: "#203546" }}
                >
                  CV Resume Writing
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link
                href="/cdr-sample"
                style={{ color: "white", margin: "0 1.5rem" }}
              >
                CDR Samples
              </Nav.Link>

              <div
                href="/anzsco-codes"
                className="relative tooltip1"
                id="basic-nav-dropdown"
                style={{ color: "white", margin: "0 2rem" }}
                onClick={() => navigate("/anzsco-codes")}
              >
                ANZSCO Code
                <div
                  className="headerAnzsco"
                  style={{
                    width: "1000px",
                    height: "530px",
                    background: "#45657E",
                    borderRadius: "10px",
                    marginLeft: "-400px",
                    padding: "30px",
                    position: "absolute",
                    zIndex: "99",
                    visibility: "hidden",
                  }}
                >
                  <Row>
                    <Col md={4} xs={6} className="headerDropdownRows">
                      <strong>Unit Group 1332</strong>
                      <br />
                      <div className="headerDropdownList">
                        <a
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-133211-engineering-manager"
                        >
                          Engineering Manager (ANZSCO 133211)
                        </a>
                      </div>
                    </Col>
                    <Col md={4} xs={6} className="headerDropdownRows">
                      <strong>Unit Group 2331</strong>
                      <br />
                      <div className="headerDropdownList">
                        <a
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-233111-chemical-engineer"
                        >
                          Chemical Engineer (ANZSCO 233111)
                        </a>
                        <a
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-233112-materials-engineer"
                        >
                          Materials Engineer (ANZSCO 233112)
                        </a>
                      </div>
                    </Col>
                    <Col md={4} xs={6} className="headerDropdownRows">
                      <strong>Unit Group</strong>
                      <br />
                      <div className="headerDropdownList">
                        <a
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-233211-civil-engineer"
                        >
                          Civil Engineer (ANZSCO 233211)
                        </a>
                        <a
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-233212-geo-technical-engineer"
                        >
                          Geotechnical Engineer (ANZSCO 233212)
                        </a>
                        <a
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-233214-structural-engineer"
                        >
                          Structural Engineer (ANZSCO 233214)
                        </a>
                        <a
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-233214-structural-engineer"
                        >
                          Transport Engineer (ANZSCO 233215)
                        </a>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col md={4} xs={6} className="headerDropdownRows">
                      <strong>Unit Group 2333</strong>
                      <br />
                      <div className="headerDropdownList">
                        <a
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-233311-electrical-engineer"
                        >
                          Electrical Engineer (ANZSCO 233311)
                        </a>
                      </div>
                    </Col>
                    <Col md={4} xs={6} className="headerDropdownRows">
                      <strong>Unit Group 2334</strong>
                      <br />
                      <div className="headerDropdownList">
                        <a
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-233411-electronics-engineer"
                        >
                          Electronics Engineer (ANZSCO 233411)
                        </a>
                      </div>
                    </Col>
                    <Col md={4} xs={6} className="headerDropdownRows">
                      <strong>Unit Group 2335</strong>
                      <br />
                      <div className="headerDropdownList">
                        <a
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-233511-industrial-engineer"
                        >
                          Industrial Engineer (ANZSCO 233511)
                        </a>
                        <a
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-233512-mechanical-engineer"
                        >
                          Mechanical Engineer (ANZSCO 233512)
                        </a>
                        <a
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-233513-production-or-plant-engineer"
                        >
                          Production or Plant Engineer (ANZSCO 233513)
                        </a>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col md={4} xs={6} className="headerDropdownRows">
                      <strong>Unit Group 2336</strong>
                      <br />
                      <div className="headerDropdownList">
                        <a
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-233611-mining-engineer"
                        >
                          Mining Engineer (ANZSCO 233611)
                        </a>
                        <a
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-233612-petroleum-engineer"
                        >
                          Petroleum Engineer (ANZSCO 233612)
                        </a>
                      </div>
                    </Col>
                    <Col md={4} xs={6} className="headerDropdownRows">
                      <strong>Unit Group 2339</strong>
                      <br />
                      <div className="headerDropdownList">
                        <a
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-233911-aeronautical-engineer"
                        >
                          Aeronautical Engineer (ANZSCO 233911)
                        </a>
                        <a
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-233912-agricultural-engineer"
                        >
                          Agricultural Engineer (ANZSCO 233912)
                        </a>
                        <a
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-233916-naval-architect"
                        >
                          Naval Architect (ANZSCO 233916)
                        </a>
                        <a
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-233913-biomedical-engineer"
                        >
                          Biomedical Engineer (ANZSCO 233913)
                        </a>
                        <a
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-233914-engineering-technologist"
                        >
                          Engineering Technologist (ANZSCO 233914)
                        </a>
                        <a
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-233915-environmental-engineer"
                        >
                          Environmental Engineer (ANZSCO 233915)
                        </a>
                        <a
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-233999-engineering-professionals-nec"
                        >
                          Engineering Professionals (nec) (ANZSCO 233999)
                        </a>
                      </div>
                    </Col>
                    <Col md={4} xs={6} className="headerDropdownRows">
                      <strong>Unit Group 2631</strong>
                      <br />
                      <div className="headerDropdownList">
                        <a
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-263111-computer-networks-and-system-engineers"
                        >
                          Computer Network and Systems Engineer (ANZSCO 263111)
                        </a>
                        <a
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-263311-telecommunication-engineers"
                        >
                          Telecommunications Engineer (ANZSCO 263311)
                        </a>
                        <a
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-313212-telecommunication-network-engineers"
                        >
                          Telecommunications Network Engineer (ANZSCO 313212)
                        </a>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col md={4} xs={6} className="headerDropdownRows">
                      <strong>Unit Group 3122</strong>
                      <br />
                      <div className="headerDropdownList">
                        <a
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-312211-civil-engineering-draftsperson"
                        >
                          Civil Engineering Draftsperson (ANZSCO 312211)
                        </a>
                        <a
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-312212-civil-engineering-technician"
                        >
                          Civil Engineering Technician (ANZSCO 312212)
                        </a>
                      </div>
                    </Col>
                    <Col md={4} xs={6} className="headerDropdownRows">
                      <strong>Unit Group 3123</strong>
                      <br />
                      <div className="headerDropdownList">
                        <a
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-312311-electrical-engineering-draftsperson"
                        >
                          Electrical Engineering Draftsperson (ANZSCO 312311)
                        </a>
                        
                        <a
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-312312-electrical-engineering-technician"
                        >
                          Electrical Engineering Technician (ANZSCO 312312)
                        </a>
                      </div>
                    </Col>
                    <Col md={4} xs={6} className="headerDropdownRows">
                      <strong>Unit Group 3132</strong>
                      <br />
                      <div className="headerDropdownList">
                        <a
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-313212-telecommunication-field-engineer"
                        >
                          Telecommunications Field Engineer (ANZSCO 312311)
                        </a>
                        <a
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-313212-telecommunication-technologist"
                        >
                          Telecommunications Technologist(ANZSCO 313212)
                        </a>
                        <a
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-313213-telecommunications-network-planner"
                        >
                          Telecommunications Network Planner(ANZSCO 313213)
                        </a>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>

              <Nav.Link
                href="/pricing"
                style={{ color: "white", margin: "0 1.5rem" }}
              >
                Pricing
              </Nav.Link>

              <Nav.Link
                href="/faq"
                style={{ color: "white", margin: "0 1.5rem" }}
              >
                FAQ
              </Nav.Link>
              <Nav.Link
                href="/blogs"
                style={{ color: "white", margin: "0 1.5rem" }}
              >
                Blogs
              </Nav.Link>

              <Button
                className="px-4"
                style={{ background: "#017CC9" }}
                onClick={() => navigate(`/our-agents`)}
              >
                Meet Our Experts
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Navbar,
  Nav,
  Container,
  Button,
  NavDropdown,
  Dropdown,
  Modal,
  Form,
  ListGroup,
  Offcanvas,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

const NavBar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearchModal, setShowSearchModal] = useState(false);
  const navigate = useNavigate();

  // Example search links
  const searchData = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Healthcare", path: "/healthcare" },
    { name: "Retail Industry", path: "/retailpage" },
    { name: "Public Sector", path: "/publicsector" },
    { name: "Life Sciences", path: "/lifescience" },
    { name: "Customer", path: "/customer" },
    { name: "Services", path: "/services" },
    { name: "Features", path: "/features" },
    { name: "Contact Us", path: "/contactus" },
    { name: "About Us", path: "/about" },
  ];

  const filteredResults = searchData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleNavigate = (path) => {
    navigate(path);
    setShowSearchModal(false);
    setSearchTerm("");
    setShowSidebar(false);
  };

  return (
    <>
      <Navbar bg="white" variant="light" expand="lg" className="shadow-sm custom-navbar">
        <Container>
        <Navbar.Brand as={NavLink} to="/" className="d-flex align-items-center">
        <div className="d-flex align-items-center gap-3">
    <img id="logoimg" src="/images/logop.png" alt="Logo" className="navbar-logo" />
    <p className="navbar-title m-0" id="Eintx">Einfratech Systems</p>
</div>
</Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-nav" onClick={() => setShowSidebar(true)} />

          {/* Sidebar for Small Screens */}
          <Offcanvas show={showSidebar} onHide={() => setShowSidebar(false)} placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="flex-column">
                <NavDropdown title="Dashboard" id="dashboard-dropdown">
                  <NavDropdown.Item as={NavLink} to="/dashboard" onClick={() => setShowSidebar(false)}>Dashboard Home</NavDropdown.Item>
                  <NavDropdown.Divider />
                  {/* <NavDropdown.Item as={NavLink} to="/healthcare" onClick={() => setShowSidebar(false)}>Healthcare</NavDropdown.Item> */}
                  <NavDropdown.Item as={NavLink} to="/retailpage" onClick={() => setShowSidebar(false)}>Retail Industry</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/publicsector" onClick={() => setShowSidebar(false)}>Public Sector</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/lifescience" onClick={() => setShowSidebar(false)}>Life Sciences</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/education" onClick={() => setShowSidebar(false)}>Education</NavDropdown.Item>

                </NavDropdown>
                <Nav.Link as={NavLink} to="/customer" onClick={() => setShowSidebar(false)}>Customer</Nav.Link>
                <Nav.Link as={NavLink} to="/services" onClick={() => setShowSidebar(false)}>Services</Nav.Link>
                <Nav.Link as={NavLink} to="/features" onClick={() => setShowSidebar(false)}>Features</Nav.Link>

                {/* Contact Dropdown */}
                <Dropdown>
                  <Dropdown.Toggle as="div" className="nav-link">Contact</Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item as={NavLink} to="/contactus" onClick={() => setShowSidebar(false)}>Contact Us</Dropdown.Item>
                    <Dropdown.Item as={NavLink} to="/about" onClick={() => setShowSidebar(false)}>About Us</Dropdown.Item>
                    <Dropdown.Item as={NavLink} to="/professional" onClick={() => setShowSidebar(false)}>Professional Services</Dropdown.Item>



                  </Dropdown.Menu>
                </Dropdown>

                <Button as={NavLink} to="/signin" variant="primary" className="px-4 mt-3" onClick={() => setShowSidebar(false)}>
                  Sign In
                </Button>
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>

          {/* Large Screen Menu */}
          <Navbar.Collapse id="navbar-nav" className="d-none d-lg-flex">
            <Nav className="ms-auto">
              <NavDropdown title="Dashboard" id="dashboard-dropdown">
                <NavDropdown.Item as={NavLink} to="/dashboard">Dashboard Home</NavDropdown.Item>
                <NavDropdown.Divider />
                {/* <NavDropdown.Item as={NavLink} to="/healthcare">Healthcare</NavDropdown.Item> */}
                <NavDropdown.Item as={NavLink} to="/retailpage">Retail Industry</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/publicsector">Public Sector</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/lifescience">Life Sciences</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/education">Education</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={NavLink} to="/customer">Customer</Nav.Link>
              <Nav.Link as={NavLink} to="/services">Services</Nav.Link>
              <Nav.Link as={NavLink} to="/features">Features</Nav.Link>

              <Dropdown>
                <Dropdown.Toggle as="div" className="nav-link">Contact</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={NavLink} to="/contactus">Contact Us</Dropdown.Item>
                  <Dropdown.Item as={NavLink} to="/about">About Us</Dropdown.Item>
                  <Dropdown.Item as={NavLink} to="/professional">Professional Services</Dropdown.Item>

                </Dropdown.Menu>
              </Dropdown>

              {/* Search Icon Button */}
              <Button variant="outline-primary" className="search-icon ms-4" onClick={() => setShowSearchModal(true)}>
                <i className="bi bi-search"></i>
              </Button>

              <Button as={NavLink} to="/signin" variant="primary" className="px-4 ms-3">
                Sign In
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Search Modal */}
      <Modal show={showSearchModal} onHide={() => setShowSearchModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Search</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <ListGroup className="mt-3">
            {filteredResults.length > 0 ? (
              filteredResults.map((item, index) => (
                <ListGroup.Item
                  key={index}
                  action
                  onClick={() => handleNavigate(item.path)}
                >
                  {item.name}
                </ListGroup.Item>
              ))
            ) : (
              <ListGroup.Item>No results found</ListGroup.Item>
            )}
          </ListGroup>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NavBar;
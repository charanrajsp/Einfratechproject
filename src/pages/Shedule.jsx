import React, { useState } from "react";
import { Container, Form, Button, Row, Col, Alert, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Schedul = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    date: "",
    time: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ type: "", message: "" });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setAlert({ type: "", message: "" });
  
    try {
      const response = await fetch("http://localhost:5000/api/auth/schedule", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const text = await response.text();  // Read response as text
      console.log("Raw API Response:", text);
  
      try {
        const data = JSON.parse(text);  // Try parsing JSON
        if (response.ok) {
          setAlert({ type: "success", message: data.message || "Demo scheduled successfully!" });
          setFormData({ name: "", email: "", phone: "", company: "", date: "", time: "", message: "" });
        } else {
          setAlert({ type: "danger", message: data.error || "Failed to schedule demo. Please try again." });
        }
      } catch (jsonError) {
        console.error("Invalid JSON Response:", jsonError);
        setAlert({ type: "danger", message: "Server error: Unexpected response format." });
      }
    } catch (error) {
      console.error("Request Error:", error);
      setAlert({ type: "danger", message: "Network error. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="mt-5 mb-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="text-center mb-4">Schedule a Demo</h2>
          
          {alert.message && (
            <Alert variant={alert.type} className="text-center">
              {alert.message}
            </Alert>
          )}

          <Form onSubmit={handleSubmit} className="shadow p-4 rounded bg-white">
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                type="text"
                name="company"
                placeholder="Enter your company name"
                value={formData.company}
                onChange={handleChange}
              />
            </Form.Group>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Select Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Select Time</Form.Label>
                  <Form.Control
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Additional Message (Optional)</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="message"
                placeholder="Any specific requirements or questions?"
                value={formData.message}
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100" disabled={loading}>
              {loading ? (
                <>
                  <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                  {" "} Scheduling...
                </>
              ) : (
                "Schedule Demo"
              )}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Schedul;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Signin.css"; // Ensure custom styling is applied
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = isSignUp
      ? "http://localhost:5000/api/auth/register"
      : "http://localhost:5000/api/auth/login";

    const requestBody = isSignUp
      ? { name: formData.name, email: formData.email, password: formData.password }
      : { email: formData.email, password: formData.password };

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });

      const text = await response.text();
      console.log("Raw API Response:", text);

      try {
        const data = JSON.parse(text);
        console.log("Parsed JSON:", data);

        if (response.ok) {
          if (isSignUp) {
            toast.success("Signup successful! Redirecting...");
            localStorage.setItem("token", data.token); // Store token immediately
            setTimeout(() => {
             navigate("/dashboard"); // Redirect to Dashboard automatically
            }, 1500);
          } else {
            toast.success("Login successful! Redirecting...");
            localStorage.setItem("token", data.token);
            setTimeout(() => {
              navigate("/dashboard");
            }, 1500);
          }
          setFormData({ name: "", email: "", password: "" });
        } else {
          toast.error(data.message || "Authentication failed!");
        }
      } catch (jsonError) {
        console.error("JSON Parse Error:", jsonError);
        toast.error("Unexpected response from server.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <ToastContainer />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className={`signin-container ${isSignUp ? "active" : ""}`}
      >
        <Row className="g-0">
          {/* Left Section (Toggle Message) */}
          <Col md={6} className="signin-image d-flex align-items-center justify-content-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h3>{isSignUp ? "Already have an account?" : "New here?"}</h3>
              <Button
                variant="light"
                className="mt-3 toggle-btn"
                onClick={() => setIsSignUp(!isSignUp)}
              >
                {isSignUp ? "Sign In" : "Sign Up"}
              </Button>
            </motion.div>
          </Col>

          {/* Right Section (Form) */}
          <Col md={6}>
            <Card className="p-4 shadow-lg">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-center mb-4">{isSignUp ? "Sign Up" : "Sign In"}</h2>
                <Form onSubmit={handleSubmit}>
                  {isSignUp && (
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
                  )}
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
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  
                  <Button className="w-100" variant="primary" type="submit">
                    {isSignUp ? "Sign Up" : "Sign In"}
                  </Button>
                </Form>
              </motion.div>
            </Card>
          </Col>
        </Row>
      </motion.div>
    </Container>
  );
};

export default SignIn;

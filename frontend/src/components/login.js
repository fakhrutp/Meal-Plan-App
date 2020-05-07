import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

class Login extends Component {
  render() {
    return (
      <Container fluid="sm">
        <form>
          <h3
            style={{ "text-align": "center", padding: "20px", color: "green" }}
          >
            Sign In
          </h3>

          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <Button variant="success" block>
            Sign In
          </Button>
          <p className="forgot-password text-right">
            Forgot <a>password?</a>
          </p>
        </form>
      </Container>
    );
  }
}

export default Login;

// Import necessary dependencies
import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { GoogleLogin, GoogleOAuthProvider, useGoogleOAuth } from '@react-oauth/google';
import "./app.css"
import Website from "./Website";

const GoogleAuthButton = () => {
  const { signIn, isSignedIn } = useGoogleOAuth();

  return (
    <div>
      {isSignedIn ? (
        <div>
         <Website />
        </div>
      ) : (
<GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>    )}
    </div>
  );
};


// App component
const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <GoogleOAuthProvider clientId="746005843544-atk5tu7gc0svtpk01mmklttvnavcri75.apps.googleusercontent.com">
      <Router>
        <div className="app-container">
          {isLoggedIn ? (
            <>
              <Button onClick={() => setLoggedIn(false)}>Logout</Button>
              
            </>
          ) : (
            <Container className="login-container">
              <h1>Login Page</h1>
              <Form>
                <Row className="mb-3">
                  <Col>
                    <Form.Control type="text" placeholder="Username" />
                  </Col>
                  <Col>
                    <Form.Control type="password" placeholder="Password" />
                  </Col>
                </Row>
                <Button variant="primary" type="submit">
                  Login
                </Button>
              </Form>

              <div className="login-options mt-3">
                <p>
                  Don't have an account? <Link to="/signup">Signup</Link>
                </p>
                <p>
                  <Link to="/login-otp">Login with OTP</Link>
                </p>
                {/* Render Google authentication button */}
                <GoogleAuthButton />
              </div>
            </Container>
          )}
        </div>
      </Router>
    </GoogleOAuthProvider>
  );
};

export default App;

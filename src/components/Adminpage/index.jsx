import { React, useState, useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { Dashboard } from './Dashboard';

export function Adminpage() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [rollno, setRollNo] = useState();
  const [pass, setPass] = useState();
  const [isWrong, setIsWrong] = useState(false);
  const jwtToken = localStorage.getItem('token');
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  if (!isSignedIn && jwtToken != null) setIsSignedIn(true);
  useEffect(() => {
  }, [isSignedIn]);
  async function loginUser(credentials) {
    return axios
      .post(`${backendUrl}admin/`, JSON.stringify(credentials), {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((response) => {
        if (response.data.isAuthorized === 'True') {
          localStorage.setItem('token', response.data.jwt_token);
          setIsSignedIn(false);
          setIsWrong(false);
        } else {
          setIsWrong(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginUser({
      roll_number: rollno,
      password: pass
    });
  };
  const showIsWrongText = () => {
    if (isWrong) {
      return (
        <h6 className="mb-4" style={{ color: '#FF0000' }}>
          Wrong Password
        </h6>
      );
    }
    return null;
  };
  return (
    <Container className="mt-5 mb-3">
      {!isSignedIn ? (
        <div className="m-auto w-50">
          <h1 className="mb-4" style={{ color: '#6AE1DD' }}>
            Admin Login
          </h1>
          <Form>
            <Form.Group className="mb-3" controlId="formLogin">
              <Form.Label>Roll no</Form.Label>
              <Form.Control
                className="mb-3"
                value={rollno}
                type="text"
                onChange={(e) => setRollNo(e.target.value)}
              />
              <Form.Label>Password</Form.Label>
              <Form.Control
                className="mb-3"
                value={pass}
                type="password"
                onChange={(e) => setPass(e.target.value)}
              />
              {showIsWrongText()}
              <Button variant="primary" onClick={handleSubmit}>
                Login
              </Button>
            </Form.Group>
          </Form>
        </div>
      ) : (
        <Dashboard />
      )}
    </Container>
  );
}

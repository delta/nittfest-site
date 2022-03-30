import { React, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { PropTypes } from 'prop-types';

export function Login({ setToken }) {
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const [rollno, setRollNo] = useState();
  const [password, setPassword] = useState();

  async function loginUser(credentials) {
    return fetch(`${backendUrl}login/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    }).then((data) => data.json());
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      rollno,
      password
    });
    setToken(token);
  };
  return (
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
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="primary" onClick={handleSubmit}>
          Login
        </Button>
      </Form.Group>
    </Form>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};

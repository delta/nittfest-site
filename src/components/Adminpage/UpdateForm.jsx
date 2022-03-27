import { React } from 'react';
import {
  Button, Form, Row, Col
} from 'react-bootstrap';

export function UpdateForm() {
  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="email" placeholder="Enter name" />
        </Form.Group>
      </Row>

      <Row>
        <Form.Group as={Col} className="mb-3" id="formGridRegistration">
          <Form.Check type="checkbox" label="Is registration completed" />
        </Form.Group>
        <Form.Group as={Col} className="mb-3" id="formGridEvent">
          <Form.Check type="checkbox" label="Is event completed" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control placeholder="NITTFEST Event" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formRules">
        <Form.Label>Rules</Form.Label>
        <Form.Control placeholder="OC decision is final" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridFormLink">
          <Form.Label>Form Link</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEventLink">
          <Form.Label>Event Link</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridImageLink">
          <Form.Label>Image Link</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Row>
        <Form.Group as={Col} className="mb-3" id="formGridStartTime">
          <Form.Check type="checkbox" label="Start Time" />
        </Form.Group>
        <Form.Group as={Col} className="mb-3" id="formGridEndTime">
          <Form.Check type="checkbox" label="End Time" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridPosition">
          <Form.Label>Position</Form.Label>
          <Form.Select defaultValue="1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridDepartment">
          <Form.Label>Departments</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPoint">
          <Form.Label>Point</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridPosition">
          <Form.Label>Position</Form.Label>
          <Form.Select defaultValue="2">
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridDepartment">
          <Form.Label>Departments</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPoint">
          <Form.Label>Point</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridPosition">
          <Form.Label>Position</Form.Label>
          <Form.Select defaultValue="3">
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridDepartment">
          <Form.Label>Departments</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPoint">
          <Form.Label>Point</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

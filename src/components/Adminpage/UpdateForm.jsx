import { React, useState, useEffect } from 'react';
import 'react-datetime/css/react-datetime.css';
import Datetime from 'react-datetime';
import {
  Button, Form, Row, Col
} from 'react-bootstrap';
import PropTypes from 'prop-types';

export function UpdateForm(props) {
  const { eventData } = props;
  const [eventFinalData, setEventFinalData] = useState(eventData);

  const handleSubmit = () => {

  };

  useEffect(() => {
  }, [eventFinalData]);
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control value={eventFinalData.description} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formRules">
        <Form.Label>Rules</Form.Label>
        <Form.Control value={eventFinalData.rules} />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridFormLink">
          <Form.Label>Form Link</Form.Label>
          <Form.Control value={eventFinalData.form_link} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEventLink">
          <Form.Label>Event Link</Form.Label>
          <Form.Control value={eventFinalData.event_link} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridImageLink">
          <Form.Label>Image Link</Form.Label>
          <Form.Control value={eventFinalData.image_link} />
        </Form.Group>
      </Row>

      <Row>
        <Form.Group as={Col} className="mb-3" id="formGridRegistration">
          <Form.Check
            type="checkbox"
            checked={eventFinalData.is_reg_completed}
            onChange={() => {
              setEventFinalData({
                ...eventFinalData,
                is_reg_completed: !eventFinalData.is_reg_completed
              });
            }}
            label="Is registration completed"
          />
        </Form.Group>
        <Form.Group as={Col} className="mb-3" id="formGridEvent">
          <Form.Check
            type="checkbox"
            checked={eventFinalData.is_event_completed}
            onChange={() => {
              setEventFinalData({
                ...eventFinalData,
                is_event_completed: !eventFinalData.is_event_completed
              });
            }}
            label="Is event completed"
          />
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col} className="mb-3" id="formGridStartTime">
          <Form.Label>Start Time</Form.Label>
          <Datetime />
        </Form.Group>
        <Form.Group as={Col} className="mb-3" id="formGridEndTime">
          <Form.Label>Start Time</Form.Label>
          <Datetime />
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

      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
}
UpdateForm.propTypes = {
  eventData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    is_reg_completed: PropTypes.bool.isRequired,
    is_event_completed: PropTypes.bool.isRequired,
    rules: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    form_link: PropTypes.string.isRequired,
    event_link: PropTypes.string.isRequired,
    image_link: PropTypes.string.isRequired
  }).isRequired
};

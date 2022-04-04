/* eslint-disable react/no-array-index-key */
import { React, useState, useEffect } from 'react';
import 'react-datetime/css/react-datetime.css';
import Datetime from 'react-datetime';
import {
  Button, Form, Row, Col
} from 'react-bootstrap';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import axios from 'axios';
import { BACKEND_URL } from '../../config/config';

export function UpdateForm(props) {
  const backendUrl = BACKEND_URL;
  const jwtToken = localStorage.getItem('token');
  const { eventData, clusterData } = props;
  const [eventFinalData, setEventFinalData] = useState(eventData);
  const [depName, setDepName] = useState([]);

  const fetchDepartmentData = () => {
    axios.get(`${backendUrl}/department/`).then((response) => {
      const { data } = response;
      setDepName(data.departments.map((dept) => dept.name));
    });
  };
  useEffect(() => {
    fetchDepartmentData();
  }, []);

  const handleSubmit = () => {
    const clusterFinalData = {
      cluster: clusterData.cluster,
      events: [eventFinalData].flat()
    };
    axios
      .post(`${backendUrl}/events/update`, JSON.stringify(clusterFinalData), {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwtToken}`
        }
      })
      .then((response) => {
        console.log(response);
        toast.success('Event updated successfully', {
          position: 'bottom-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error('Error updating evetn', {
          position: 'bottom-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        });
      });
  };

  useEffect(() => {}, [eventFinalData]);
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          value={eventFinalData.description}
          onChange={(event) => {
            setEventFinalData({
              ...eventFinalData,
              description: event.target.value
            });
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formRules">
        <Form.Label>Rules</Form.Label>
        <Form.Control
          value={eventFinalData.rules}
          onChange={(event) => {
            setEventFinalData({
              ...eventFinalData,
              rules: event.target.value
            });
          }}
        />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridFormLink">
          <Form.Label>Form Link</Form.Label>
          <Form.Control
            value={eventFinalData.form_link}
            onChange={(event) => {
              setEventFinalData({
                ...eventFinalData,
                form_link: event.target.value
              });
            }}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEventLink">
          <Form.Label>Event Link</Form.Label>
          <Form.Control
            value={eventFinalData.event_link}
            onChange={(event) => {
              setEventFinalData({
                ...eventFinalData,
                event_link: event.target.value
              });
            }}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridImageLink">
          <Form.Label>Image Link</Form.Label>
          <Form.Control
            value={eventFinalData.image_link}
            onChange={(event) => {
              setEventFinalData({
                ...eventFinalData,
                image_link: event.target.value
              });
            }}
          />
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
          <Datetime
            value={eventFinalData.start_time}
            onChange={(event) => {
              setEventFinalData({
                ...eventFinalData,
                start_time: event.toDate()
              });
            }}
          />
        </Form.Group>
        <Form.Group as={Col} className="mb-3" id="formGridEndTime">
          <Form.Label>End Time</Form.Label>
          <Datetime
            value={eventFinalData.end_time}
            onChange={(event) => {
              setEventFinalData({
                ...eventFinalData,
                end_time: event.toDate()
              });
            }}
          />
        </Form.Group>
      </Row>

      {eventFinalData.points.map((point, index) => (
        <Row className="mb-3" key={index}>
          <Form.Group as={Col} controlId="formGridPosition">
            <Form.Label>Position</Form.Label>
            <Form.Select>
              <option>{point.position}</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridDepartment">
            <Form.Label>Department</Form.Label>
            <Form.Select
              defaultValue={point.department}
              onChange={(event) => {
                const tmpPoints = eventFinalData.points;
                tmpPoints[index].department = event.target.value;
                setEventFinalData({
                  ...eventFinalData,
                  points: [tmpPoints].flat()
                });
              }}
            >
              {depName.map((name) => (
                <option value={name} key={name}>
                  {name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPoint">
            <Form.Label>Point</Form.Label>
            <Form.Control
              value={point.point}
              onChange={(event) => {
                const tmpPoints = eventFinalData.points;
                tmpPoints[index].point = event.target.value;
                setEventFinalData({
                  ...eventFinalData,
                  points: [tmpPoints].flat()
                });
              }}
            />
          </Form.Group>
        </Row>
      ))}

      <Button variant="primary" onClick={handleSubmit}>
        {`Update ${eventFinalData.name} Event`}
      </Button>
    </Form>
  );
}
UpdateForm.propTypes = {
  eventData: PropTypes.shape({
    name: PropTypes.string,
    is_reg_completed: PropTypes.bool,
    is_event_completed: PropTypes.bool,
    rules: PropTypes.string,
    description: PropTypes.string,
    form_link: PropTypes.string,
    event_link: PropTypes.string,
    image_link: PropTypes.string,
    start_time: PropTypes.string,
    end_time: PropTypes.string,
    points: PropTypes.arrayOf(
      PropTypes.shape({
        point: PropTypes.number,
        position: PropTypes.number,
        department: PropTypes.string
      })
    )
  }).isRequired,
  clusterData: PropTypes.shape({
    cluster: PropTypes.string,
    event: PropTypes.shape({
      name: PropTypes.string,
      is_reg_completed: PropTypes.bool,
      is_event_completed: PropTypes.bool,
      rules: PropTypes.string,
      description: PropTypes.string,
      form_link: PropTypes.string,
      event_link: PropTypes.string,
      image_link: PropTypes.string,
      start_time: PropTypes.string,
      end_time: PropTypes.string,
      points: PropTypes.arrayOf(
        PropTypes.shape({
          point: PropTypes.number,
          position: PropTypes.number,
          department: PropTypes.string
        })
      )
    })
  }).isRequired
};

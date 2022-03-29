import { React, useState, useEffect } from 'react';
import {
  Container, Accordion, Button, Modal
} from 'react-bootstrap';
import styles from './admin.module.css';
import { UpdateForm } from './UpdateForm';

export function Adminpage() {
  const [isLoading, setIsLoading] = useState(true);
  const [clusters, setClusters] = useState([]);
  const [show, setShow] = useState(false);
  const [eventData, setEventData] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = (event) => {
    const tmpEventData = {
      eventName: event.name,
      is_reg_completed: event.is_reg_completed,
      is_event_completed: event.is_event_completed,
      rules: event.rules,
      description: event.description,
      form_link: event.form_link,
      event_link: event.event_link,
      image_link: event.image_link,
      points: event.points
    };
    setEventData(tmpEventData);
    setShow(true);
  };

  const fetchData = () => {
    fetch('http://localhost:10000/events/')
      // TODO change url to server
      .then((res) => res.json())
      .then((data) => {
        setClusters(data);
        setIsLoading(false);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container className="mt-5 mb-3">
      <div className="m-auto w-50">
        <h1 className="mb-4" style={{ color: '#6AE1DD' }}>
          Admin Page
        </h1>
        <Modal className={styles.form} show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{`Update Event : ${eventData.eventName}`}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <UpdateForm eventData={eventData} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Update Event
            </Button>
          </Modal.Footer>
        </Modal>
        {isLoading ? (
          <div>Loading</div>
        ) : (
          <div>
            {clusters
              && clusters.map((cluster) => (
                <Accordion key={cluster.cluster}>
                  <Accordion.Header className={`mb-1 ${styles.title}`}>
                    {`Cluster name : ${cluster.cluster}`}
                  </Accordion.Header>
                  <Accordion.Body className={styles.title_text}>
                    Events
                    <div>
                      <div>
                        {cluster.events
                          && cluster.events.map((event) => (
                            <Accordion key={event.name}>
                              <Accordion.Header
                                className={`mb-1 ${styles.title}`}
                              >
                                {`Event name : ${event.name}`}
                              </Accordion.Header>
                              <Accordion.Body className={styles.title_text}>
                                <Button
                                  variant="primary"
                                  onClick={() => {
                                    handleShow(event);
                                  }}
                                >
                                  Update the event
                                </Button>
                              </Accordion.Body>
                            </Accordion>
                          ))}
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion>
              ))}
          </div>
        )}
      </div>
    </Container>
  );
}

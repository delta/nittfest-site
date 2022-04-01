/* eslint-disable indent */
/* eslint-disable no-tabs */
/* eslint-disable no-console */
import { React, useState, useEffect } from 'react';
import {
 Container, Accordion, Button, Modal
} from 'react-bootstrap';
import axios from 'axios';
import styles from './admin.module.css';
import { UpdateForm } from './UpdateForm';
import { BACKEND_URL } from '../../config/config';

export function Dashboard() {
	const backendUrl = BACKEND_URL;
	const [isLoading, setIsLoading] = useState(true);
	const [clusters, setClusters] = useState([]);
	const [show, setShow] = useState(false);
	const [eventData, setEventData] = useState({});
	const [currentClusterData, setCurrentClusterData] = useState({});

	const handleClose = () => setShow(false);
	const handleShow = (event, clusterName) => {
		const tmpEventData = {
			name: event.name,
			is_reg_completed: event.is_reg_completed,
			is_event_completed: event.is_event_completed,
			rules: event.rules,
			description: event.description,
			form_link: event.form_link,
			event_link: event.event_link,
			image_link: event.image_link,
			start_time: event.start_time,
			end_time: event.end_time,
			points: event.points
		};
		setEventData(tmpEventData);
		setCurrentClusterData({ cluster: clusterName.cluster, tmpEventData });
		setShow(true);
	};

	const fetchData = () => {
		axios
			.get(`${backendUrl}/events/`)
			.then((res) => {
				setClusters(res.data);
				setIsLoading(false);
			})
			.catch((err) => {
				console.log(err);
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
        Admin Dashboard
      </h1>
      <Modal className={styles.form} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UpdateForm
            eventData={eventData}
            clusterData={currentClusterData}
          />
        </Modal.Body>
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
																		handleShow(event, cluster);
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

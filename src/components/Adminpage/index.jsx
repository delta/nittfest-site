import { React, useState, useEffect } from 'react';
import { Container, Accordion } from 'react-bootstrap';

export function Adminpage() {
  const [isLoading, setIsLoading] = useState(true);
  const [clusters, setClusters] = useState([]);

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
        {isLoading ? (
          <div>Loading</div>
        ) : (
          <div>
            {clusters
              && clusters.map((cluster) => (
                <Accordion>
                  <Accordion.Header className="mb-4">{`Cluster name : ${cluster.cluster}`}</Accordion.Header>
                  <Accordion.Body>Hello</Accordion.Body>
                </Accordion>
              ))}
          </div>
        )}
      </div>
    </Container>
  );
}

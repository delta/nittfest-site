import React from 'react';
import {
  Navbar, Container, Nav, Button
} from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import styles from './style.module.css';

const routes = [
  {
    name: 'Home',
    url: '/'
  },
  {
    name: 'About',
    url: '/about'
  },
  {
    name: 'Events',
    url: '/events'
  },
  {
    name: 'Leaderboad',
    url: '/leaderboard'
  },
  {
    name: 'Sponsors',
    url: '/sponsors'
  },
  {
    name: 'Team',
    url: '/team'
  }
];

export function NavBar() {
  const location = useLocation();
  return (
    <Navbar collapseOnSelect expand="md" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src="/logo.png"
            width="50"
            height="50"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="text-center">
          <Container className="mx-auto">
            <Nav className="d-flex justify-content-evenly">
              {routes.map((route) => (
                <Link
                  key={`${route.url}`}
                  to={`${route.url}`}
                  style={location.pathname.toLowerCase() === route.url.toLowerCase()
                    ? { color: '#f58719' } : { color: '#fff' }}
                  className={`${styles.linked} nav-link`}
                >
                  {route.name.toUpperCase()}
                </Link>
              ))}
            </Nav>
          </Container>
          <Button variant="outline-primary" className={styles.orange}>Register</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

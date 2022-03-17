import React from 'react';
import {
  Container
} from 'react-bootstrap';

export function Leaderboard() {
  return (
    <Container className="mt-5 mb-3">
      <div className="m-auto w-50">
        <h1 className="mb-4" style={{ color: '#6AE1DD' }}>Leaderboard</h1>
        <p>
          Departments scoreboard
        </p>
        <p>
          A leaderboard allows you to see how the Profiles,
          {' '}
          Pages, accounts, or subreddits in a List or Search are performing relative to each other
        </p>
      </div>
    </Container>
  );
}

import { HomePageContainer } from '../containers/HomePageContainer';
import { LeaderboardContainer } from '../containers/LeaderboardContainer';
import { EventPageContainer } from '../containers/EventPageContainer';

export const publicRoutes = [
  {
    url: '/',
    component: HomePageContainer,
    name: 'HomePageContainer'
  },
  {
    url: '/leaderboard',
    component: LeaderboardContainer,
    name: 'LeaderboardContainer'
  },
  {
    url: '/events',
    component: EventPageContainer,
    name: 'EventPageContainer'
  }
];

export const adminRoutes = [];

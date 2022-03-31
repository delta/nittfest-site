import { HomePageContainer } from '../containers/HomePageContainer';
import { LeaderboardContainer } from '../containers/LeaderboardContainer';
import { AdminContainer } from '../containers/AdminContainer';

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
    url: '/admin',
    component: AdminContainer,
    name: 'AdminContainer'
  }
];

export const adminRoutes = [];

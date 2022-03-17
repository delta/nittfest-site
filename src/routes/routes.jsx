import { HomePageContainer } from '../containers/HomePageContainer';
import { LeaderboardContainer } from '../containers/LeaderboardContainer';

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
  }

];

export const adminRoutes = [];

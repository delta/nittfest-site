import { HomePageContainer } from '../containers/HomePageContainer';
import { LeaderboardContainer } from '../containers/LeaderboardContainer';
import { EventPageContainer } from '../containers/EventPageContainer';
// import { TeamPageContainer } from '../containers/TeamPageContainer';

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
  } // ,
  // {
  //   url: '/team',
  //   component: TeamPageContainer,
  //   name: 'TeamPageContainer'
  // }
];

export const adminRoutes = [];

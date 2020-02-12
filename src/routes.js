import WelcomeContainer from 'pages/WelcomePage/WelcomeContainer';
import TestsContainer from 'pages/TestsPage/TestsContainer';
import TestContainer from 'pages/TestPage/TestContainer';

export default [
  {
    path: '/',
    exact: true,
    component: WelcomeContainer,
  },
  {
    path: '/tests',
    exact: true,
    component: TestsContainer,
  },
  {
    path: '/tests/:id',
    exact: true,
    component: TestContainer,
  },
];

import WelcomePageContainer from 'components/WelcomePage/WelcomePageContainer';
import TestsContainer from 'components/Tests/TestsContainer';
import TestContainer from 'components/Test/TestContainer';

export default [
  {
    path: '/welcome',
    exact: true,
    component: WelcomePageContainer,
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

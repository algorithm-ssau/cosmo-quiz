import Main from '../pages/Main';
import Topic from '../pages/Topic';

export default [
  { path: '/', component: Main },
  { path: '/topic/:id', component: Topic },
];

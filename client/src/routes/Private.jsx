import Main from '../pages/Main';
import Question from '../pages/Question'
import Topic from '../pages/Topic';

export default [
  { path: '/', component: Main },
  { path: '/topics/:id', component: Topic },
	{ path: '/question/:id', component: Question}
];

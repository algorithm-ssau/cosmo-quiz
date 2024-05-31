import Main from '../pages/Main';
import Question from '../pages/Question'
import Topic from '../pages/Topic';

export default [
  { path: '/', component: Main },
  { path: '/topics/:id', component: Topic },
	{ path: '/topics/:id/:question_id', component: Question}
];

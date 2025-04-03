import Main from '../pages/Main';
import Question from '../pages/Question'
import Topic from '../pages/Topic';
import Profile from '../pages/Profile';

export default [
  { path: '/', component: Main },
  { path: '/profile', component: Profile },
  { path: '/topics/:id', component: Topic },
	{ path: '/topics/:id/:question_id', component: Question}
];

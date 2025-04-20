import Main from '../pages/Main';
import Question from '../pages/Question'
import Topic from '../pages/Topic';
import Profile from '../pages/Profile';
import Heroes from '../pages/Heroes';
import Prizes from '../pages/Prizes';
import About from '../pages/About';

export default [
  { path: '/', component: Main },
  { path: '/profile', component: Profile },
  { path: '/profile/heroes', component: Heroes },
  { path: '/profile/prizes', component: Prizes },
  { path: '/profile/about', component: About },
  { path: '/topics/:id', component: Topic },
	{ path: '/topics/:id/:question_id', component: Question}
];

import './css/home.css';
import createTabs from './pages/tab';
import createHomePage from './pages/home';
import { firstLoad } from './pages/home';

const content = document.getElementById('content');

firstLoad();
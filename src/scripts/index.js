import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/style.scss';
import { showsList } from './UX/cards';
import showPopup from './UX/popup';
import commentAPI from './API/Involvement';

showsList.renderCards();
showPopup();
commentAPI();
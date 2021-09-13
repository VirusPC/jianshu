import { combineReducers } from 'redux';
import headerReducer from '../components/Header/store/reducer';

export default combineReducers({
  header: headerReducer
})
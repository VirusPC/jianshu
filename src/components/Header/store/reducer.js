import {Search_Focus_Action, Search_Blur_Action} from "./actionTypes"
import { fromJS } from 'immutable';

const defaultState = fromJS({
  focused: false
});
export default (state = defaultState, action) => {
  if(action.type === Search_Focus_Action){
    if(state.get("focused") === false) {
      // const newState = JSON.parse(JSON.stringify(state));
      // newState.focused = true;
      // return newState;
      // immutable对象的set方法,会结合之前immutable对象的值和设置的值,返回一个全新的对象
      return state.set("focused", true)
    }
  } else if(action.type === Search_Blur_Action){
    if(state.get("focused") === true) {
      // const newState = JSON.parse(JSON.stringify(state));
      // newState.focused = false;
      // return newState;
      return state.set("focused", false);
    }
  }
  return state;
}
import {Search_Focus_Action, Search_Blur_Action} from "./actionTypes"

const defaultState = {
  focused: false
};
export default (state = defaultState, action) => {
  if(action.type === Search_Focus_Action){
    if(state.focused === false) {
      const newState = JSON.parse(JSON.stringify(state));
      newState.focused = true;
      return newState;
    }
  } else if(action.type === Search_Blur_Action){
    if(state.focused === true) {
      const newState = JSON.parse(JSON.stringify(state));
      newState.focused = false;
      return newState;
    }
  }
  return state;
}
import {Search_Focus_Action, Search_Blur_Action} from './actionTypes';

export const getSearchFocusAction = () => ({
  type: Search_Focus_Action
});

export const getSearchBlurAction = () => ({
  type: Search_Blur_Action
});
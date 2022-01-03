import { combineReducers } from 'redux';

import posts from './posts';

export const reducers = combineReducers({ posts });
//here we combine one or more than one reducers
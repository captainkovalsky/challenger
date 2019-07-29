import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { epic as authEpic, reducer as authReducer } from './auth';

export const rootEpic = combineEpics(
  authEpic,
);


export const rootReducer = combineReducers({
  authReducer,
});
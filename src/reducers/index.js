import { combineReducers } from 'redux';
import POSTS_REDUCER from './reducer_posts';
import {reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
	posts: POSTS_REDUCER,
	form: formReducer
});

export default rootReducer;

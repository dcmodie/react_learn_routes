import { combineReducers } from 'redux';
import POSTS_REDUCER from './reducer_posts';

const rootReducer = combineReducers({
	posts: POSTS_REDUCER
});

export default rootReducer;

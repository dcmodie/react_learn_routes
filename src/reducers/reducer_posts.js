const INITIAL_STATE = {
	all:[], 
	post:null, 
	filterPublicationType:"all", 
	filterLifeCycle:"all"
};

import {FETCH_POSTS} from '../actions/index'
import {FETCH_POST} from '../actions/index'
import {CLEAR_POST} from '../actions/index'
import {FILTER_PUBLICATION_TYPE} from '../actions/index'
import {FILTER_LIFECYCLE} from '../actions/index'


export default function (state = INITIAL_STATE, action ){
	switch(action.type){
		case FETCH_POSTS:
			console.log ("in reducer postss")
			console.log (action.payload.data)
			return {...state, all: action.payload.data}
			break;		
		case FETCH_POST:
		case CLEAR_POST:
			console.log ("in reducer post")
			console.log (action.payload.data)
			return {...state, post: action.payload.data}
			break;
		case FILTER_PUBLICATION_TYPE:
		console.log ("in reducer FILTER_PUBLICATION_TYPE")
			//return { ...state, visibilityFilter: action.filter }
			return {...state, filterPublicationType: action.payload}
			break;
		case FILTER_LIFECYCLE:
			break
		default:
			return state;
	}
}
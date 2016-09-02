const INITIAL_STATE = {all:[], post:null};
import {FETCH_POSTS} from '../actions/index'
import {FETCH_POST} from '../actions/index'
import {CLEAR_POST} from '../actions/index'


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
		default:
			return state;
	}
}
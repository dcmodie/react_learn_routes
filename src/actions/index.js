import axios from 'axios';

export const FETCH_POST= 'FETCH_POST'
export const FETCH_POSTS= 'FETCH_POSTS'
export const CREATE_POST= 'CREATE_POST'
export const CLEAR_POST= 'CLEAR_POST'

const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=123lhasdglkjhasdfkljhasfklhswkjh'
export function fetchPosts(){

	var url = `${ROOT_URL}/posts/${API_KEY}`
	const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)

	console.log ("url")
	console.log (url)

	// make api call
	console.log ("action called")
	console.log (request)
	//payload.data


	return{
		type:FETCH_POSTS,
		payload:request
	};
}

export function createPost(props){
	//create a post
	console.log ("calling a post in actions index")
	console.log ("the value of props: ")
	console.log (props)
	const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);

	return {
		type: CREATE_POST,
		payload: request
	}
}

export function fetchPost(id){
	//fetch a post
	//console.log ("calling a fetch post in actions index")
	var url = `${ROOT_URL}/posts/${id}/${API_KEY}/${id}`
	//console.log (url)
	const request = axios.get(url);

	console.log ("returned from back end")
	console.log (request)
	return {
		type: FETCH_POST,
		payload: request
	}
}

export function clearPost(fields){
	console.log ("clearing post")
	//create an object with a key-value pair for each field, set the value of each 
	//to an empty string
	var retObj = {data:{}}
	for (var key in fields){
		retObj.data[key]='';
	}
	return {
		type: CLEAR_POST,
		payload: retObj
	}
}


// API
//http://reduxblog.herokuapp.com
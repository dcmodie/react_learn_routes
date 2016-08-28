import axios from 'axios';

export const FETCH_POSTS= 'FETCH_POSTS'

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

// API
//http://reduxblog.herokuapp.com
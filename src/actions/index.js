import axios from 'axios';

export const FETCH_POSTS= 'FETCH_POSTS'

const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=123lhasdglkjhasdfkljhasfklhswkjh'
export function fetchPosts(){
	const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)



	// make api call
	console.log ("action called")
	return{
		type:FETCH_POSTS,
		payload:request
	};
}
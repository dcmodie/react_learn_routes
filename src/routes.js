import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app.js'
import PostsIndex from './components/posts_index.js'

const Greeting = () => {
	return <div> hey here</div>
}

export default (
	<Route path="/" component={App} >
		<IndexRoute component={PostsIndex} />
		<Route path="greet" component={Greeting}/>
		<Route path="greet1" component={Greeting}/>
		<Route path="greet2" component={Greeting}/>
	</Route>
)
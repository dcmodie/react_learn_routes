import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app.js'
import PostsNew from './components/posts_new.js'
import PostsIndex from './components/posts_index.js'
import PostsShow from './components/posts_show.js'

const Greeting = () => {
	return <div> hey here</div>
}

export default (
	<Route path="/" component={App} >
		<IndexRoute component={PostsIndex} />
		<Route path="posts/new" component={PostsNew}/>
		<Route path="posts/:id" component={PostsShow}/>
		<Route path="greet" component={Greeting}/>
		<Route path="greet1" component={Greeting}/>
		<Route path="greet2" component={Greeting}/>
	</Route>
)
// that id will be seen as 
//this.props.params.id
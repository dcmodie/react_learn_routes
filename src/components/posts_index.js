import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPosts} from '../actions/index.js'
import {testRoutingWithFilters} from '../actions/index.js'
import {Link} from 'react-router'
import DropzoneDemo from './dropzone_demo.js'
import {FILTER_PUBLICATION_TYPE }from '../actions/index.js'
import {FILTER_LIFECYCLE }from '../actions/index.js'
import FilterPublicationType from './filter_publication_type.js'

class PostIndex extends Component   {

	constructor(props){
		super(props);
	
	}
	componentWillMount (){
		console.log ("params in componentWillMount of PostIndex ")
		this.props.fetchPosts();
	}

	renderList(item){
		return (
			<li className = "list-group-item">
				<Link to={"posts/" + item.id}>
					<span className ="pull-xs-right">{item.categories}</span>
					<strong >{item.title}</strong>
				</Link>

			</li>
		)
	}

	render (){
		console.log ('in render in PostIndex')
		//console.log (this.props.blogList)
		return (
			<div>
				<div className='text-xs-right'>
					<Link to='posts/new' className="btn btn-primary">
					Add a Post
					</Link>
				</div>
				<FilterPublicationType />
				<div>
					<ul className='list'>{
						this.props.blogList.map(this.renderList)
					}
					</ul>
				</div>
				<div>
					<DropzoneDemo />
				</div>
			</div>
		)
	}
}

function mapStateToProps(state){
	console.log ("state in postsIndex.mapStateToProps")
	console.log (state)
	return{
	 blogList: state.posts.all
	}
}

function mapDispatchToProps (dispatch){
  return bindActionCreators({fetchPosts}, dispatch)
}

export default connect( mapStateToProps, mapDispatchToProps)(PostIndex)


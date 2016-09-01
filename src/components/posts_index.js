import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPosts} from '../actions/index.js'
import {Link} from 'react-router'

class PostIndex extends Component   {
	componentWillMount (){
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
		console.log ('in postss_index')
		console.log (this.props.blogList)
		return (
			<div>
				<div className='text-xs-right'>
					<Link to='posts/new' className="btn btn-primary">
					Add a Post
					</Link>
				</div>
				<div>
					<ul className='list'>{

						this.props.blogList.map(this.renderList)
					}
					</ul>
				</div>

			</div>
		)
	}
}

function mapStateToProps(state){
	console.log ("state")
	console.log (state)
	return{
	 blogList: state.posts.all
	}
}

function mapDispatchToProps (dispatch){
  return bindActionCreators({fetchPosts}, dispatch)
}

export default connect( mapStateToProps, mapDispatchToProps)(PostIndex)


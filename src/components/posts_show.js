import React from 'react';
import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { reduxForm } from 'redux-form'
import { createPost } from '../actions/index'
import { Link } from 'react-router'
import {fetchPost} from '../actions/index.js'


class PostsShow extends Component   {

	// static contextTypes = {
	// 	router: PropTypes.object
	// 	//bind handle onSubmit
	// }

	// onSubmit (propertiesFromTheForm){
	// 	this.props.createPost(propertiesFromTheForm)
	// 		.then(() => { 
	// 			//blog post has been created 
	// 			// navigate to index
	// 			// call this.context.router.push with the new path
	// 			this.context.router.push('/')
	// 		});
	// }

	componentWillMount(){
		this.props.fetchPost(this.props.params.id)
	}

	render (){
		console.log ("in posts show")
		console.log (this.props.data)
		if (!this.props["data"]){
			return (
				<div>Loading...</div>
				)
		}else {
			return (
				<div>
					<div>Show post {this.props.params.id}</div>
					<h3>Show post {this.props.data.title}</h3>
					<h6>Show post {this.props.data.categories}</h6>
					<p>Show post {this.props.data.content}</p>
				</div>
				)
		}
		
	}
}

function mapStateToProps(state){
	console.log ("state in posts show mapStateToProps")
	console.log (state)
	return{
	 	data: state.posts.post
	}
}

function mapDispatchToProps (dispatch){
  return bindActionCreators({fetchPost}, dispatch)
}

export default connect( mapStateToProps, mapDispatchToProps)(PostsShow)


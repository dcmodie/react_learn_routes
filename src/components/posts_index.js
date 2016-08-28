import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPosts} from '../actions/index.js'

class PostIndex extends Component   {
	componentWillMount (){
		this.props.fetchPosts();
	}

	renderList(item){
		return (
			<li>{item.categories}</li>
		)
	}

	render (){
		console.log ('in postss_index')
		console.log (this.props.blogList)
		return (
			<div>
				<div>{
					this.props.blogList.map(this.renderList)
				}</div>
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


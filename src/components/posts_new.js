import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

class PostsNew extends Component   {
	render (){
		return (
			<div>
				<div>Posts New View</div>
			</div>
		)
	}
}

function mapStateToProps(state){
	return {}
}

function mapDispatchToProps (dispatch){
	return {}
}

export default connect( mapStateToProps, mapDispatchToProps)(PostsNew)


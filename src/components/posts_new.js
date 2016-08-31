import React from 'react';
import { Component } from 'react';
//import { connect } from 'react-redux';
//import {bindActionCreators} from 'redux';
import { reduxForm } from 'redux-form'

class PostsNew extends Component   {
	render (){
		return (
			<form>
				<h3> Create a new post </h3>
				<div className='form-group'>
					<label>Title</label>
					<input type="text" className="form-control" />
				</div>

				<div className='form-group'>
					<label>Categories</label>
					<input type="text" className="form-control" />
				</div>
				<div className='form-group'>
					<label>Content</label>
					<textarea type="text" className="form-control" />
				</div>

				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		)
	}
}

function mapStateToProps(state){
	return {}
}

function mapDispatchToProps (dispatch){
	return {}
}

export default reduxForm ({
	form: 'PostsNewForm',
	fields:['title':'categories','content']
})(PostsNew)


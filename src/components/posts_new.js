import React from 'react';
import { Component } from 'react';
import { reduxForm } from 'redux-form'
import { createPost } from '../actions/index'

class PostsNew extends Component   {

	handleSubmit(evt){
		evt.preventDefault();
		console.log ('about to call action')
		
	}

	render (){
		const handleSubmit = this.handleSubmit
		const title = this.props.fields.title
		const categories = this.props.fields.categories
		const content = this.props.fields.content
		console.log ("title")
		console.log (title)
		return (
			<form onSubmit = {handleSubmit} >
				<h3> Create a new post </h3>
				<div className='form-group'>
					<label>Title</label>
					<input type="text" className="form-control" {...title}/>
				</div>

				<div className='form-group'>
					<label>Categories</label>
					<input type="text" className="form-control" {...categories}/>
				</div>
				<div className='form-group'>
					<label>Content</label>
					<textarea type="text" className="form-control" {...content}/>
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
  return reduxForm({createPost}, dispatch)
}

export default reduxForm ({
	form: 'PostsNewForm',
	fields:['title':'categories','content']
	},
	null, 
	mapDispatchToProps)(PostsNew)


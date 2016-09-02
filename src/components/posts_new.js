import React from 'react';
import { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form'
import { createPost } from '../actions/index'
import { fetchPost } from '../actions/index'
import { clearPost } from '../actions/index'
import { Link } from 'react-router'

class PostsNew extends Component   {

	constructor(props) {
	    super(props);
	    //this.state = {isNew:true};
	    this.isNew = true;
  	}

	static contextTypes = {
		router: PropTypes.object
		//bind handle onSubmit
	}

	componentWillMount(){
		console.log ("in componentWillMount PostsNew")
		console.log (this.props)

		if (this.props.params.id){
			this.props.fetchPost(this.props.params.id)
			this.isNew = false;
		}
		else {
			//this.props.clearPost()
			console.log ("reseting form")
			this.props.clearPost(this.props.fields);
			this.isNew = true;
		}
		console.log ("isNew: " + this.isNew)
	}

	onSubmit (propertiesFromTheForm){
		console.log ("onSubmit in PostsNew, value of isNew " , this.isNew)
		// can use isNew to figure out if updating or creating a post
		this.props.createPost(propertiesFromTheForm)
			.then(() => { 
				//blog post has been created 
				// navigate to index
				// call this.context.router.push with the new path
				this.context.router.push('/')
			});

	}

	render (){

		const handleSubmit = this.props.handleSubmit
		const title = this.props.fields.title
		const categories = this.props.fields.categories
		const content = this.props.fields.content
		console.log ("rendering in posts new post from fetch:")
		console.log (this.props)
		if (this.props.hasOwnProperty("values")){
			console.log (this.props.values)

		}
		var categoriesVal = ""
		var titleVal = ""
		var contentVal = ""
		var pageTitle = "Create a new Post"
		if (this.isNew){
			//this.props["initialValues"] = {};
		} ;
		if (this.props.initialValues){

			// console.log ("this.props.initialValues is true")
			// console.log (props.initialValues)
			// // categoriesVal = this.props.post.categories
			// // titleVal = this.props.post.title
			// // contentVal = this.props.post.content
			// // pageTitle = "Edit a Post"
			//  this.state.isNew = false;
		}

		return (
			<form onSubmit = {handleSubmit(this.onSubmit.bind(this))} >
				<h3> {pageTitle} </h3>
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
	console.log ("in mapStateToProps")
	console.log (state)
	return {
		initialValues:state.posts.post
	}
}

// function mapDispatchToProps (dispatch){
//   return reduxForm({createPost}, dispatch)
// }

export default reduxForm ({
	form: 'PostsNewForm',
	fields:['title','categories','content']
	},
	mapStateToProps, 
	{createPost, fetchPost, clearPost})(PostsNew)


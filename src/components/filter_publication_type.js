import React from 'react';
import { Component, PropTypes  } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {testRoutingWithFilters} from '../actions/index.js'
import {FILTER_PUBLICATION_TYPE }from '../actions/index.js'
import {FILTER_LIFECYCLE }from '../actions/index.js'

class FilterPublicationType extends Component   {

	constructor(props){
		super(props);
		this.testFilterRoutingHandler = this.testFilterRoutingHandler.bind(this);

	}

	//if we need to redirect after a submit, set this up
	static contextTypes = {
		router: PropTypes.object
	}

	componentWillMount (){
		//this.props.fetchPosts();
		console.log ("calling component will mount")
	}

	testFilterRoutingHandler(evt){
		console.log ("testFilterRoutingHandler called")
		console.log ("0")
		var filterObject = {type:FILTER_PUBLICATION_TYPE, payload:"news"}
		// call the action
		console.log ("1")
		this.props.testRoutingWithFilters(filterObject)
	}
	render (){
		console.log ('in render of FilterPublicationType')
		return (
			<div>
				<div>
					<button onClick={this.testFilterRoutingHandler}>Test Filter Routing</button>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state){
	console.log ("state in FilterPublicationType.mapStateToProps")
	console.log ("2")
	console.log (state)

	var filterLifeCycle = state.posts.filterLifeCycle
	var filterPublicationType = state.posts.filterPublicationType

	// call the route
	this.context.router.push('foo/filterLifeCycle='+filterLifeCycle+'/filterPublicationType='+filterPublicationType)
	return{
	 // filterLifeCycle: state.posts.filterLifeCycle,
	 // filterPublicationType: state.posts.filterPublicationType
	}
}

function mapDispatchToProps (dispatch){
  return bindActionCreators({testRoutingWithFilters}, dispatch)
}

export default connect( mapStateToProps, mapDispatchToProps)(FilterPublicationType)


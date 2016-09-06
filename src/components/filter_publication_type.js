import React from 'react';
import { Component, PropTypes  } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {testRoutingWithFilters} from '../actions/index.js'
import {FILTER_PUBLICATION_TYPE }from '../actions/index.js'
import {FILTER_LIFECYCLE }from '../actions/index.js'
import {Link} from 'react-router'
import {fetchPosts} from '../actions/index.js'

class FilterPublicationType extends Component   {

	constructor(props){
		super(props);
		this.testFilterRoutingHandler = this.testFilterRoutingHandler.bind(this);

	}

	componentWillMount (){
		console.log ("calling component will mount")
		//call route
	}

	componentWillReceiveProps (nextProps){
		console.log ("calling componentWillReceiveProps in FilterPublicationType")
		// call fetch
		console.log(nextProps)
		console.log(this.props)

		var filters = {
			filterLifeCycle: nextProps["filterLifeCycle"],
			filterPublicationType: nextProps.filterPublicationType
		}
		// now we can update the index, and pass filters
		this.props.fetchPosts(filters);
	}

	testFilterRoutingHandler(evt){
		console.log ("testFilterRoutingHandler called")
		console.log (this.context)
		console.log ("1")
		var filterObject = {type:FILTER_PUBLICATION_TYPE, payload:"news"}
		//call the action to update the state
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
	console.log (state)
	return{
	  filterLifeCycle: state.posts.filterLifeCycle,
	  filterPublicationType: state.posts.filterPublicationType
	}
}

function mapDispatchToProps (dispatch){
  return bindActionCreators({testRoutingWithFilters, fetchPosts}, dispatch)
}

export default connect( mapStateToProps, mapDispatchToProps)(FilterPublicationType)


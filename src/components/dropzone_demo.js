import React from 'react';
import { Component } from 'react';
import { reduxForm } from 'redux-form'
var Dropzone = require('react-dropzone')
// import { createPost } from '../actions/index'
// import { fetchPost } from '../actions/index'
// import { clearPost } from '../actions/index'
//import { Link } from 'react-router'

export default class DropzoneDemo extends Component   {

	constructor(props) {
	    super(props);
	    this.state = {
            imageFiles: []
        }
        this.onDrop = this.onDrop.bind(this);

  	}

	componentWillMount(){
	}

	onSubmit (propertiesFromTheForm){
	}

	onDrop (imageFiles) {
      	console.log('Received files: ', imageFiles);
     	this.setState({
        	imageFiles: imageFiles
    	})
    }

    


	render (){

		return (
			<div>
				<form>
					<Dropzone 
						onDrop={this.onDrop}
						multiple={false}
						thumbnailWidth={50}
						thumbnailHeight={50}
						>
		              	<div>Try dropping some files here, or click to select files to upload.</div>
		            
			         {
				         	this.state.imageFiles.length > 0 ? 
				         	<div>
				    			<h2>Uploading {this.state.imageFiles.length} files...</h2>
				    			<div>{this.state.imageFiles.map((file) => <img src={file.preview} /> )}</div>
				    		</div> : null
				    	}

		            </Dropzone>

	

	            </form>
			</div>

		)
	}
}


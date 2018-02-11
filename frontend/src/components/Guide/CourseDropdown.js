import React from 'react';
import { Dropdown } from 'semantic-ui-react';

// API calls here
const jsonmajors = require('./majors.json');
const majors = jsonmajors.majors;

const jsonminors = require('./minors.json');
const minors = jsonminors.minors;

const tracks = [
	{key: 'T1', value: 'Pre-Medical', text: 'Pre-Medical'},
	{key: 'T2', value: 'Pre-Law', text: 'Pre-Law'},
	{key: 'T3', value: 'Pre-Dental', text: 'Pre-Dental'},
	{key: 'T4', value: 'Pre-Veterinary', text: 'Pre-Veterinary'},
	{key: 'T5', value: 'Pre-Education', text: 'Pre-Education'},
	{key: 'T6', value: 'Pre-Pharmacy', text: 'Pre-Pharmacy'}
]

class CourseDropdown extends React.Component {

	constructor(props) {
		super();
		let curriculum = majors;
		switch(props.name) {
			case 'Minors':
				curriculum = minors;
				break;
			case 'Pre-Professional Tracks':
				curriculum = tracks;
				break;
			default:
				curriculum = majors;
		}
		this.state = { options: curriculum };
		
	}

	// Backpropagates selected values to local state of SlideContainer parent.
	selectTracks(e, dropdown) {
		this.props.setLocalState(this.props.id, dropdown.value)
	}
	/* Receives title of category (major, minor, pre-pro. tracks as props) */
	render() {
		return (
			<Dropdown fluid multiple search selection className="ui big" 
				placeholder={this.props.name} options={this.state.options} onChange={this.selectTracks.bind(this)}/>
		)
	}
}

export default CourseDropdown;

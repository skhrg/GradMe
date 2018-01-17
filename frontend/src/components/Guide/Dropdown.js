import React from 'react';
import { Dropdown } from 'semantic-ui-react'

class DropdownMulti extends React.Component {

	/* receives title of category (major, minor, pre-pro. tracks as props) */
	render() {
		const name = this.props.name
		let options = []
		switch(name) {
			case 'Majors': 
				options = majors;
				break;
			case 'Minors':
				options = minors;
				break;
			case 'Pre-Professional Tracks':
				options = tracks;
				break;
			default:
				options = 'Select';
		}

		return (
			<Dropdown placeholder={name} fluid multiple search selection className="ui big" options={options} />
		)
	}
}

const jsonmajors = require('./majors.json');
const majors = Array.from(jsonmajors.majors);

const jsonminors = require('./minors.json');
const minors = Array.from(jsonminors.minors);

const tracks = [
	{key: 'T1', value: 'Pre-Medical', text: 'Pre-Medical'},
	{key: 'T2', value: 'Pre-Law', text: 'Pre-Law'},
	{key: 'T3', value: 'Pre-Dental', text: 'Pre-Dental'},
	{key: 'T4', value: 'Pre-Veterinary', text: 'Pre-Veterinary'},
	{key: 'T5', value: 'Pre-Education', text: 'Pre-Education'},
	{key: 'T6', value: 'Pre-Pharmacy', text: 'Pre-Pharmacy'}
]

export default DropdownMulti;

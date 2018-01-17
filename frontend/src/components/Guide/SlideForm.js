import React from 'react';
import DropdownMulti from './Dropdown.js'

/* component that simply contains a header, paragraph, and dropdown */
class SlideForm extends React.Component {

	// /** check if activeItem is identical to name */
	isActive(id) {
		let active = this.props.active === id ? 'slide active' : 'slide';
		return active;
	}

	render() {
		if (this.props.active === 0) {
			return (
				<div className={this.isActive(this.props.id)}>
					<h1 className="title">{this.props.title}</h1>
      				<p className="description">{this.props.description}</p>
      			</div>
      		)
		} else {
			return (
				<div className={this.isActive(this.props.id)}>
					<h1 className="title">{this.props.title}</h1>
      				<p className="description">{this.props.description}</p>
      				<DropdownMulti name={this.props.title}/>
      			</div>
			)
		}
		
	}
}

export default SlideForm;
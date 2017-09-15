import React from 'react';
import DropdownMulti from './Dropdown.js'

/* component that simply contains a header, paragraph, and dropdown */
class Slide extends React.Component {

	// /** check if activeItem is identical to name */
	isActive(name) {
		const active = this.props.active === name ? 'slide active' : 'slide';
		return active;
	}

	render() {
		if (this.props.title === "Introduction") {
			return (
				<div className={this.isActive(this.props.name)}>
					<h1 className="title">{this.props.title}</h1>
      				<p className="description">{this.props.description}</p>
      			</div>
      		)
		} else {
			return (
				<div className={this.isActive(this.props.name)}>
					<h1 className="title">{this.props.title}</h1>
      				<p className="description">{this.props.description}</p>
      				<DropdownMulti name={this.props.title}/>
      			</div>
			)
		}
		
	}
}

export default Slide;
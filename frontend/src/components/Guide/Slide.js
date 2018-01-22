import React from 'react';
import CourseDropdown from './CourseDropdown.js'

/* Presentational component for header, paragraph, and CourseDropdown. */
class Slide extends React.Component {

	isActive(id) {
		let active = this.props.active === id ? 'slide active' : 'slide';
		return active;
	}

	render() {
		if (this.props.id === 0) {
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
      				<CourseDropdown id={this.props.id} name={this.props.title} setLocalState={this.props.setLocalState}/>
      			</div>
			)
		}
		
	}
}

export default Slide;
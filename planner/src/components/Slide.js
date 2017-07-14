import React from 'react';
import DropdownMulti from './Dropdown.js'

/* a component that simply contains a header and paragraph */
class Slide extends React.Component {


	render() {
		if (this.props.name == "Introduction") {
			return (
				<div className="slide active">
					<h1 className="title">{this.props.name}</h1>
      				<p className="description">{this.props.description}</p>
      			</div>
      		)
		} else {
			return (
				<div className="slide active">
					<h1 className="title">{this.props.name}</h1>
      				<p className="description">{this.props.description}</p>
      				<DropdownMulti name={this.props.name}/>
      			</div>
			)
		}
		
	}
}

export default Slide;
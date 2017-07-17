import React from 'react';
import SlideMenu from './SlideMenu.js'
import SlideWrapper from './SlideWrapper.js';

class PageContainer extends React.Component {
	
	constructor() {
		super()
		this.state = {activeItem: itemNames.opt1};
  		this.optionHandler = this.optionHandler.bind(this);
	}

	optionHandler(e, {name}) {
    	this.setState({
        	activeItem: name
    	});
  	}

	render() {

		return (
			<div className="ui stackable grid container"><div className="two column row">

				<div className="four wide left floated middle aligned column">
					<h4 className="ui huge header left">Course Planner</h4>
					<SlideMenu options={itemNames} handler={this.optionHandler}/>
				</div>

				<div className="ten wide middle aligned column">
					<SlideWrapper />
				</div>

			</div></div>
		)
	}
}

const itemNames = {
  			opt1: "Find your requirements",
  			opt2: "Pick a major",
  			opt3: "Choose a minor",
  			opt4: "Select a Pre-Professional Track"
}

export default PageContainer;
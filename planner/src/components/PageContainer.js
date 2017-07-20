import React from 'react';
import SlideMenu from './SlideMenu.js'
import SlideContainer from './SlideContainer.js';

class PageContainer extends React.Component {
	
	constructor() {
		super()
		this.state = {activeItem: options.opt1}
  		this.optionHandler = this.optionHandler.bind(this);
  		{console.log(options.opt1.constructor === String)}
	}

	/** called by SlideMenu child component **/
	optionHandler({name}) {
		if (name === this.state.activeItem) {
			return;
		}
		
    	this.setState({
        	activeItem: name
    	});
    	// {alert(this.state.activeItem)}
  	}

	render() {

		return (
			<div className="ui stackable grid container"><div className="two column row">

				<div className="four wide left floated middle aligned column">
					<h4 className="ui huge header left">Course Planner</h4>
					<SlideMenu options={options} active={this.state.activeItem} handler={this.optionHandler}/>
				</div>

				<div className="ten wide middle aligned column">
					<SlideContainer options={options} active={this.state.activeItem} handler={this.optionHandler.bind(this)}/>
				</div>

			</div></div>
		)
	}
}

const options = {
  	opt1: "Find your requirements",
  	opt2: "Pick a major",
  	opt3: "Choose a minor",
  	opt4: "Select a Pre-Professional Track"
}

export default PageContainer;
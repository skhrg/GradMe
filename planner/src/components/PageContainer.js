import React from 'react';
import PageTitle from './PageTitle.js'
import SlideMenu from './SlideMenu.js'
import SlideContainer from './SlideContainer.js';

class PageContainer extends React.Component {
	
	constructor() {
		super()
		this.state = {activeItem: options[0]}
  		this.optionHandler = this.optionHandler.bind(this);
  		{console.log(options[0].constructor === String)}
	}

	/** called by SlideMenu and SlideFooter components
		@param newActive	string in options array **/
	optionHandler(newActive) {
		if (newActive === this.state.activeItem) {
			return;
		}
		
    	this.setState({
        	activeItem: newActive
    	});
    	// {alert(this.state.activeItem)}
  	}

	render() {

		return (
			<div id="planner-container" className="ui stackable grid container">
				<PageTitle title="Course Planner"/>
			<div className="two column row">
				
				<div className="four wide left floated middle aligned column">
					<h4 className="ui huge header left">Guide</h4>
					<SlideMenu options={options} active={this.state.activeItem} handler={this.optionHandler}/>
				</div>

				<div className="ten wide middle aligned column">
					<SlideContainer options={options} active={this.state.activeItem} handler={this.optionHandler.bind(this)}/>
				</div>

			</div></div>
		)
	}
}

const options = [
  	"Find your requirements",
  	"Pick a major",
  	"Choose a minor",
  	"Select a Pre-Professional Track"
]

export default PageContainer;
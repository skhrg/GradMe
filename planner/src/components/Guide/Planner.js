import React from 'react'
import '../../css/Planner.css'
import SlideMenu from './SlideMenu.js'
import SlideContainer from './SlideContainer.js'

class Planner extends React.Component {
	
	constructor() {
		super()
		/* options is pre-set constant at bottom of this file */
		this.state = {activeItem: options[0]}
  		this.optionHandler = this.optionHandler.bind(this);
  		// {console.log(options[0].constructor === String)}
	}

	componentDidMount() {document.title = "Course Planner"; window.scrollTo(0,0)}

	/** called by SlideMenu and SlideFooter child components
		@param newActive	a string in options array **/
	optionHandler(newActive) {
		if (newActive === this.state.activeItem) {
			return;
		}
    	this.setState({
        	activeItem: newActive
    	});
  	}

	render() {
        const active = this.state.activeItem;
        var color;
        switch(active) {
        	case options[0]:
        		color = '#E3F7FA';
        		break;
            case options[1]:
            	color = '#e8f5e9';
                break;
            case options[2]:
                color = '#fffde7';
                break;
            default:
                color = 'linear-gradient(to right, #dae2f8, #d6a4a4)';
        }

		return (
			<div id="page-container" className="planner-container" style={{background: color}}>
			<div className="ui fluid stackable grid container">
			<div className="two column row fluid">
				
				<div className="four wide left floated middle aligned column">
					<h4 className="ui massive header planner-title">Course Planner</h4>
					<SlideMenu options={options} active={this.state.activeItem} handler={this.optionHandler}/>
				</div>

				<div className="nine wide middle aligned column">
					<SlideContainer options={options} active={this.state.activeItem} handler={this.optionHandler.bind(this)}/>
				</div>

			</div></div></div>
		)
	}
}

const options = [
  	"Find Requirements",
  	"Pick Majors",
  	"Choose Minors",
  	"Select Professional Tracks"
]

export default Planner;
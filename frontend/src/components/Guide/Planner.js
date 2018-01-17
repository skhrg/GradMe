import React from 'react'
import { connect } from 'react-redux'
import { changeSlide } from '../../actions/ui.js'
import '../../css/Planner.css'
import SlideMenu from './SlideMenu.js'
import Slides from './SlideContainer.js'

const mapStateToProps = (state) => {
    return { activeSlide: state.ui.activeSlide }
}

const mapDispatchToProps = dispatch => {
	return {
		selectSlide: id => {
			dispatch(changeSlide(id))
		}
	}
}

const options = [
  	"Find Requirements",
  	"Pick Majors",
  	"Choose Minors",
  	"Select Professional Tracks"
]

class Planner extends React.Component {
	constructor(props) {
		super()
		/* options is pre-set constant at bottom of this file */
		this.state = {activeItem: options[0]}
  		// {console.log(props.activeSlide)}
  		// {console.log(props.selectSlide)}
	}

	componentDidMount() {document.title = "Course Planner"; window.scrollTo(0,0)}

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
					<SlideMenu options={options} activeSlide={this.props.activeSlide} selectSlide={this.props.selectSlide}/>
				</div>

				<div className="nine wide middle aligned column">
					<Slides options={options} active={this.state.activeItem} selectSlide={this.props.selectSlide}/>
				</div>

			</div></div></div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Planner);

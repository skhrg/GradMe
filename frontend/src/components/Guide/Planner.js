import React from 'react'
import { connect } from 'react-redux'
import { changeSlide } from '../../actions/ui.js'
import '../../css/Planner.css'
import SlideMenu from './SlideMenu.js'
import Slides from './Slides.js'

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

	componentDidMount() {document.title = "Course Planner"; window.scrollTo(0,0)}

	changeBackground() {
		const active = this.props.activeSlide;
        let color;
        switch(active) {
        	case 0:
        		color = '#E3F7FA';
        		break;
            case 1:
            	color = '#e8f5e9';
                break;
            case 2:
                color = '#fffde7';
                break;
            default:
                color = 'linear-gradient(to right, #dae2f8, #d6a4a4)';
        }
        return color;
	}

	render() {
        const color = this.changeBackground();

		return (
			<div id="page-container" className="planner-container" style={{background: color}}>
			<div className="ui fluid stackable grid container">
			<div className="two column row fluid">
				
				<div className="four wide left floated middle aligned column">
					<h4 className="ui massive header planner-title">Course Planner</h4>
					<SlideMenu options={options} activeSlide={this.props.activeSlide} selectSlide={this.props.selectSlide}/>
				</div>

				<div className="nine wide middle aligned column">
					<Slides options={options} activeSlide={this.props.activeSlide} selectSlide={this.props.selectSlide}/>
				</div>

			</div></div></div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Planner);

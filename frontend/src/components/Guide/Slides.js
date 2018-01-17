import React from 'react';
import SlideForm from './SlideForm.js';
import SlideFooter from './SlideFooter.js'

const descriptions = [
	'Use this planner to select majors, minors, and/or pre-professional tracks.',
	'Computer Science, MolCell Bio, Writing Seminars - choose your major(s) from over 50 options.',
	'Extend your curriculum with selections from 44 minors.',
	'Set yourself down a pre-professional path.'
]

class Slides extends React.Component {
	
	render() {
		const options = this.props.options;
		const active = this.props.activeSlide;
		return (
			<div className="slideContainer"><div className="slides">
				<form>
					<SlideForm name={options[0]} id={0} title="Introduction" description={descriptions[0]} active={active}/>
					<SlideForm name={options[1]} id={1} title="Majors" description={descriptions[1]} active={active}/>
					<SlideForm name={options[2]} id={2} title="Minors" description={descriptions[2]} active={active}/>
					<SlideForm name={options[3]} id={3} title="Pre-Professional Tracks" description={descriptions[3]} active={active}/>
					<SlideFooter active={active} selectSlide={this.props.selectSlide}/>
				</form>
			</div></div>
		)
	}
}

export default Slides;

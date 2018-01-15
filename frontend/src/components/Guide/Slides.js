import React from 'react';
import SlideForm from './SlideForm.js';
import SlideFooter from './SlideFooter.js'

class Slides extends React.Component {

	render() {
		const { options } = this.props;
		return (
			<div className="slideContainer"><div className="slides">
				<form>
					<SlideForm name={options[0]} title="Introduction" description={descriptions.desc1} active={this.props.active}/>
					<SlideForm name={options[1]} title="Majors" description={descriptions.desc2} active={this.props.active}/>
					<SlideForm name={options[2]} title="Minors" description={descriptions.desc3} active={this.props.active}/>
					<SlideForm name={options[3]} title="Pre-Professional Tracks" description={descriptions.desc4} active={this.props.active}/>
					<SlideFooter options={options} active={this.props.active} handler={this.props.handler}/>
				</form>
			</div></div>
		)
	}
}

const descriptions = {
  desc1: 'Use this planner to select majors, minors, and/or pre-professional tracks.',
  desc2: 'Spanning Archaeology to Biomedical Engineering, Computer Science to Writing Seminars - choose your major(s) from over 50 options.',
  desc3: 'Extend your curriculum with choices of 44 minors.',
  desc4: 'Once you see how many courses you have to take to be pre-med, you might reconsider!'
}

export default Slides;
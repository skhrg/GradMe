import React from 'react';
import Slide from './Slide.js';
import SlideFooter from './SlideFooter.js'

class SlideContainer extends React.Component {


	render() {
		const { options } = this.props;
		return (
			<div className="slideContainer"><div className="slides">
				<form>
					<Slide name={options[0]} title="Introduction" description={descriptions.desc1} active={this.props.active}/>
					<Slide name={options[1]} title="Majors" description={descriptions.desc2} active={this.props.active}/>
					<Slide name={options[2]} title="Minors" description={descriptions.desc3} active={this.props.active}/>
					<Slide name={options[3]} title="Pre-Professional Tracks" description={descriptions.desc4} active={this.props.active}/>
					<SlideFooter options={options} active={this.props.active} handler={this.props.handler}/>
				</form>
			</div></div>
		)
	}
}

const descriptions = {
  desc1: 'Use this planner to select majors, minors, and/or pre-professional tracks.',
  desc2: 'Choose among 51 majors, spanning from Africana Studies to Biomedical Engineering to Computer Science to Physics.',
  desc3: 'Add depth and breath to your curriculum with one of 44 minors.',
  desc4: 'Orgo'
}

export default SlideContainer;
import React from 'react';
import Slide from './Slide.js';

class SlideWrapper extends React.Component {
	render() {
		return (
			<div className="card"><div className="slides">
				<form>
					<Slide name="Introduction" description={descriptions.desc1} />
					<Slide name="Majors" description={descriptions.desc2} />
					<Slide name="Minors" description={descriptions.desc3} />
					<Slide name="Pre-Professional Tracks" description={descriptions.desc4} />
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

export default SlideWrapper;
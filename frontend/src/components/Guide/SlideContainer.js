import React from 'react';
import Slide from './Slide.js';
import SlideFooter from './SlideFooter.js'

const descriptions = [
	'Use this planner to select majors, minors, and/or pre-professional tracks.',
	'Computer Science, MolCell Bio, Writing Seminars - choose your major(s) from over 50 options.',
	'Extend your curriculum with selections from 44 minors.',
	'Set yourself down a pre-professional path.'
]

const titles = [ 'Introduction', 'Majors', 'Minors', 'Pre-Professional Tracks']

class SlideContainer extends React.Component {
	constructor() {
		super();
		this.setLocalState = this.setLocalState.bind(this)
		/** Local state set by Slide > CourseDropdown child components.
		 *	Children modify through functions in setLocalCurrclm.
		 *	Submitted by SlideFooter. */
		this.state = {
			majors: [],
			minors: [],
			proffs: []
		};
	}

	componentDidUpdate() {
		console.log(this.state)
	}
	/* Submit local curriculum to Redux store with SlideFooter. Makes correct api request.*/
	submitCurrclm() {
		this.props.selectTracks(this.state)
	}

	setLocalState(id, options) {
		switch (id) {
			case 1:
				// callback version: this.setState ({ majors: options }, function() {console.log(this.state.majors)}.bind(this));
				this.setState ({ majors: options });
				break;
			case 2:
				this.setState ({ minors: options });
				break;
			case 3:
				this.setState ({ proffs: options });
				break;
			default:
				break;
		}
	}

	render() {
		const activeSlide = this.props.activeSlide;
		return (
			<div className="slideContainer"><div className="slides">
				<form>
					{this.props.options.map((item, i) => {
	                    return (
	                        <Slide
	                            name={item} key={i} id={i}
	                            active={activeSlide}
	                            title={titles[i]} description={descriptions[i]}
	                            setLocalState={this.setLocalState}
	                        />
	                    )
	                })}
					<SlideFooter active={activeSlide}
						selectSlide={this.props.selectSlide}
						submitCurrclm={this.submitCurrclm}/>
				</form>
			</div></div>
		)
	}
}

export default SlideContainer;

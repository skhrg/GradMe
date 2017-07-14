import React from 'react';
import SlideMenu from './SlideMenu.js'
import SlideWrapper from './SlideWrapper.js';

class PageContainer extends React.Component {
	
	render() {
		return (
			<div className="ui stackable grid container"><div className="two column row">

				<div className="four wide left floated middle aligned column">
					<h4 className="ui huge header left">Course Planner</h4>
					<SlideMenu />
				</div>

				<div className="ten wide middle aligned column">
					<SlideWrapper />
				</div>

			</div></div>
		)
	}
}

export default PageContainer;
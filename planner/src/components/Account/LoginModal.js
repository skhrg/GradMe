import React from 'react';

export default class LoginModal extends React.Component {
	constructor() {
		super()
	}
	//removes modal if click x
	clickOut(e) {

	}

	render() {
		if (this.props.visible){
			return (
				<div className="backdrop"></div>
			);
		}
		return null;
	}
}
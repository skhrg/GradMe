import React from 'react';

export default class LoginModal extends React.Component {
	constructor() {
		super()
	}

	render() {
		if (this.props.visible){
			return (
				<div className="backdrop" style={{'border': 'solid 30px #f90'}}></div>
			);
		}
		return null;
	}
}
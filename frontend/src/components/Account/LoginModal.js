import React from 'react';
//ask saianeesh to make correct api calls. will add state here.
export default class LoginModal extends React.Component {

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

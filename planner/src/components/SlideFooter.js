import React from 'react';
import { Menu } from 'semantic-ui-react'

class SlideFooter extends React.Component {

    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e, {name}) {
        // const options = this.props.options;
    	this.props.handler({name})
    }


    render() {
        return (
            <div className="cardFooter">
                <Menu.Item name={this.props.options.opt1} onClick={this.handleClick} />
            	<div className="btn" id="-1" name={this.props.options.opt1} onClick={this.handleClick}>Prev</div>
                <div className="btn" onClick={this.handleClick.bind(this)}>Next</div>
    		</div>
        );
    }
}

export default SlideFooter;
import React from 'react';
import { Menu } from 'semantic-ui-react'

class SlideFooter extends React.Component {

    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e, {name}) {
        var name = e.target.id
    	this.props.handler({name})
    }


    render() {
        return (
            <div className="cardFooter">
            	<div className="btn" id={this.props.options.opt1} onClick={this.handleClick}>Prev</div>
                <div className="btn" id={this.props.options.opt4} onClick={this.handleClick}>Next</div>
    		</div>
        );
    }
}

export default SlideFooter;
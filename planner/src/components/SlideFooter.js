import React from 'react';

class SlideFooter extends React.Component {

    constructor(props) {
        super();
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        var increment = e.target.id
        var currentIndex = this.props.options.indexOf(this.props.active);
        var newIndex = currentIndex + + increment
        var newActive = this.props.options[newIndex]
        // {console.log(newActive)
        //     console.log(newActive.constructor === String)}
    	this.props.handler(newActive)
    }


    render() {
        
        return (
            <div className="cardFooter">
            	<div className="btn" id="-1" onClick={this.handleClick}>Prev</div>
                <div className="btn" id="+1" onClick={this.handleClick}>Next</div>
    		</div>
        );
    }
}

export default SlideFooter;
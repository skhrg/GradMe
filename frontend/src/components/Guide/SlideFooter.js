import React from 'react';
import { Link } from 'react-router-dom'
/* Modular import */
import Button from 'muicss/lib/react/button';
import 'muicss/dist/css/mui.min.css';

class SlideFooter extends React.Component {

    constructor(props) {
        super();
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        e.preventDefault();
        const increment = e.target.id
        const currentIndex = this.props.options.indexOf(this.props.active);
        let newIndex = currentIndex + + increment
        const newActive = this.props.options[newIndex]
        // {console.log(newActive)
        //     console.log(newActive.constructor === String)}
    	this.props.handler(newActive)
    }

    render() {
        const options = this.props.options
        const active = this.props.active
        switch(active) {
            case options[0]:
                return (
                    <div className="cardFooter">
                        <Button variant="flat" id="+1" onClick={this.handleClick}>Next</Button>
                    </div>
                )
            case options[3]:
                return (
                    <div className="cardFooter">
                        <Button color="primary" id="submit"><Link to='/dashboard' style={{color: '#fff'}}>Submit</Link></Button>
                        <span class="bigtab"></span>
                        <Button variant="flat" id="-1" onClick={this.handleClick}>Prev</Button>
                    </div>
                )
            default:
                return (
                    <div className="cardFooter">
                        <Button variant="flat" id="+1" onClick={this.handleClick}>Next</Button>
                        <span class="bigtab"></span>
                        <Button variant="flat" id="-1" onClick={this.handleClick}>Prev</Button>
                    </div>
                );
        }
    }
}

export default SlideFooter;
import React from 'react';
import { Link } from 'react-router-dom'
/* Modular import */
import Button from 'muicss/lib/react/button';
import 'muicss/dist/css/mui.min.css';

class SlideFooter extends React.Component {

    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e, {id}) {
        e.preventDefault();
    	this.props.selectSlide(id);
    }

    render() {
        const active = this.props.active
        switch(active) {
            case 0:
                return (
                    <div className="cardFooter">
                        <Button variant="flat" id="{active+1}" onClick={this.handleClick}>Next</Button>
                    </div>
                )
            case 3:
                return (
                    <div className="cardFooter">
                        <Button color="primary" id="submit"><Link to='/dashboard' style={{color: '#fff'}}>Submit</Link></Button>
                        <span className="bigtab"></span>
                        <Button variant="flat" id="{active-1}" onClick={this.handleClick}>Prev</Button>
                    </div>
                )
            default:
                return (
                    <div className="cardFooter">
                        <Button variant="flat" id="{active+1}" onClick={this.handleClick}>Next</Button>
                        <span className="bigtab"></span>
                        <Button variant="flat" id="{active-1}" onClick={this.handleClick}>Prev</Button>
                    </div>
                );
        }
    }
}

export default SlideFooter;

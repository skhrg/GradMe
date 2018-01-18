import React from 'react';
import { Link } from 'react-router-dom'
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

class SlideFooter extends React.Component {

    handleClick(id, e) {
        e.preventDefault();
    	this.props.selectSlide(id);
    }

    render() {
        const active = this.props.active
        switch(active) {
            case 0:
                return (
                    <div className="cardFooter first">
                        <FlatButton label="Next" id={active+1} onClick={this.handleClick.bind(this, active+1)}/>
                    </div>
                )
            case 3:
                return (
                    <div className="cardFooter">
                        <FlatButton label="Prev" id={active+1} onClick={this.handleClick.bind(this, active-1)}/>
                        <span className="bigtab"></span>
                        <RaisedButton label="submit" labelColor="#fff" backgroundColor={"#03A9F4"}>
                            <Link to='/dashboard' style={{color: '#fff'}}></Link>
                        </RaisedButton>
                    </div>
                )
            default:
                return (
                    <div className="cardFooter">
                        <FlatButton label="Prev" id={active+1} onClick={this.handleClick.bind(this, active-1)}/>
                        <span className="bigtab"></span>
                        <FlatButton label="Next" id={active+1} onClick={this.handleClick.bind(this, active+1)}/>
                    </div>
                );
        }
    }
}

export default SlideFooter;

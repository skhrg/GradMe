import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom'
import '../css/Navbar.css'

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<div>
                <nav className="mobileHide"><div className="liner">
                    <li className="large logo"><div class="secondary-logo"> <i class="fa fa-student"></i>GradMe</div></li>
     
                    <div className="right-menu">
                        <li>
                            <NavLink to='/home' activeClassName="active" style={{'textDecoration':'none'}}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/planner' activeClassName="active" style={{'textDecoration':'none'}}>Planner</NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard' activeClassName="active" style={{textDecoration:'none'}}>Dashboard</NavLink>
                        </li>
                        <li className=""><a href="#">About</a></li>
                        <li className=""><a href="#">Account</a></li>
                    </div>
                </div></nav>
  
                <nav className="mobile"><div className="liner">
                    <div className="badge">
                        Logo
                    </div>
                </div></nav>
                
        	</div>
        );
    }
}

export default Navbar;

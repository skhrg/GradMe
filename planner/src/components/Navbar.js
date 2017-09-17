import React from 'react'
import { NavLink } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import '../css/Navbar.css'

const Navbar = () => {
    const history = createHistory();
    const location = history.location;
    let navback
    if (location.pathname == "/home") {
        navback = '#fff' 
    } else {
        navback = 'rgba(255,255,255,0.5)'
    }
    return (
        <div>

            <nav className="mobileHide" style={{background: navback}}><div className="liner">
                <li className="large logo"><i className="fa fa-graduation-cap"/>GradMe</li>
     
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
                    <li className=""><a>About</a></li>
                    <li className=""><a>Account</a></li>
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

export default Navbar;

import React from 'react';
import '../../css/Dashboard.css';
import DashTabs from './DashTabs.js';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);

        /* categories are 12-digit numbers received from back-end. 
            Dummy data using dataformat.json specification. */
        const categories = require('./physicsdummy.json');

        this.state = {
            data: categories
        }
    }

    componentDidMount() {
        document.title="Course Dashboard";
    }
    

    render() {
        return (
            <div id="page-container">
                <div className="overview">
                    <div className="title"><h className="huge">Course Dashboard</h></div>
                </div>

                <DashTabs categories={this.state.data}/>
            </div>
        );
    }
}

export default Dashboard;

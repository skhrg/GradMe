import React from 'react';
import '../../css/Dashboard.css';
import DashTabs from './DashTabs.js';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);

        /* categories are 12-digit numbers received from back-end. 
            Dummy data fitting dataformat.json specification.
        */
        const categories = [
            3435501711000010, //discrete course id
            69013,
            4632464565834527,
            1235134636247245,
            3463464257277576
        ]

        // const names = this.nameCategories(categories)

        this.state = {
            categories,
            names
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

                <DashTabs categories={this.state.categories} names={this.state.names}/>
            </div>
        );
    }
}

export default Dashboard;

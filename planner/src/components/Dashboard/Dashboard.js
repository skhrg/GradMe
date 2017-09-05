import React from 'react';
import '../../css/Dashboard.css';
import DashTabs from './DashTabs.js';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);

        /* categories are 12-digit numbers received from back-end. 
            Currently hard-coded example.
        */
        const categories = [
            3435501711000010, //discrete course id
            69013,
            4632464565834527,
            1235134636247245,
            3463464257277576
        ]

        const names = this.nameCategories(categories)

        this.state = {
            categories,
            names
        }
    }

    /* Parse categories to generate name string. 
            Search json data using major, minor, and pre-prof ids.
            Generate description of requirements for multi-option paths.
         */ 
    nameCategories(categories) {
        const jsonmajors = require('../Guide/majors.json');
        const majorMap = jsonmajors.majors;

        const jsonminors = require('../Guide/minors.json');
        const minorMap = jsonminors.minors;

        const names = categories.map(function(major,i) {
            return majorMap[i]["text"]
        })
        return names
    }

    render() {
        return (
            <div id="page-container">
                <div className="overview">
                    <div className="title"><p className="ui huge">Course Dashboard</p></div>
                </div>

                <DashTabs categories={this.state.categories} names={this.state.names}/>
            </div>
        );
    }
}

export default Dashboard;

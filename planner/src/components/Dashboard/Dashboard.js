import React from 'react';
import '../../css/Dashboard.css';
import DashSection from './DashSection.js';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        /* state corresponds # of sections as determined by planner + back-end.  
        E.g. a minor entered into the planner will have add a new section in addition to the major 
        and distribution requirements.  Subsections (additional majors, mionrs, are added and passed 
        to this component.*/
        var sections = [
            "Overview",
            "Major Requirements",
            "Distribution Requirements"
        ]
        this.state = {
            sections: [
                "Overview",
                "Major Requirements",
                "Distribution Requirements"
            ],
            activeSection: sections[0]}
    }

    render() {
        var sections = this.state.sections;
        return (
            <div id="page-container">
                <div className="overview">
                    <div className="title"><p className="ui huge">Course Dashboard</p></div>
                </div>

                <div className="info-bar">
                    <p className="item">Category 1</p>
                    <p className="item">Category 2</p>
                    <p className="item">Category 3</p>
                    <p className="item">Category 4</p>
                    <p className="item">Category 5</p></div>

                {sections.map(function(section,index) {
                    return <DashSection title={section} index={index} />
                })}
            </div>
        );
    }
}

export default Dashboard;

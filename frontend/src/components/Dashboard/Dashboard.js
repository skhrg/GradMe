import React from 'react';
import { connect } from 'react-redux';
import { changeTab } from '../../actions/ui.js';
import '../../css/Dashboard.css';
import DashTabs from './DashTabs.js';

const mapStateToProps = (state, ownProps) => {
    return {
        tracks: state.tracks,
        activeTab: state.ui.activeTab
    }
}
const mapDispatchToProps = dispatch => {
    return {
        selectTab: value => {
            dispatch(changeTab(value))
        }
    }
}

class Dashboard extends React.Component {

    constructor() {
        super();
        /* categories are 12-digit numbers received from back-end. 
            Dummy data using dataformat.json specification. */
        const categories = require('./physicsdummy.json');

        this.state = {data: categories}
    }

    componentDidMount() {document.title="Course Dashboard"; window.scrollTo(0,0)}

    render() {
        return (
            
            <div id="page-container">
                <div className="overview">
                    <div className="title"><h className="huge">Course Dashboard</h></div>
                </div>

                <DashTabs active={this.props.activeTab} selectTab={this.props.selectTab} categories={this.state.data}/>
            </div>
            
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

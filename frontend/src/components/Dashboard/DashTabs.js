import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Requirements from './Requirements.js';
import Courses from './Courses.js';
import Overview from './Overview.js';

const styles = {
    fontSize: 18,
};

class DashTabs extends React.Component {

    handleChange(value) {
        this.props.selectTab(value);
    };

    render() {
        const active = this.props.active;
        console.log(this.props.active)

        return (
            <Tabs value={active} onChange={this.handleChange.bind(this)}>
                <Tab style={styles} label="Overview" value={1}>
                    <Overview/>
                </Tab>
                <Tab style={styles} label="Requirements" value={2}>
                    <Requirements categories={this.props.categories}/>
                </Tab>
                <Tab style={styles} label="Courses" value={3}>
                    <Courses categories={this.props.categories}/>
                </Tab>
            </Tabs>
        );
    }
}

export default DashTabs;